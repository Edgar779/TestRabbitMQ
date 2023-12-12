
import amqp from "amqplib";

class ProcessServices {

    sendMessage = async (req, res) => {
        const number = req.query.number;
        const QUEUE_NAME = "test";
        let connection;
        try {
            connection = await amqp.connect("amqp://localhost");
            const channel = await connection.createChannel();

            await channel.assertQueue(QUEUE_NAME, { durable: false });
            channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(number)));
            console.log("Sent '%s'", number);
            await channel.close();
            return this.receiveMessage(req, res)
        } catch (err) {
            console.warn(err);
        } finally {
            if (connection) await connection.close();
        }
    }

    receiveMessage = async (req, res) => {
        try {
            const queue = "test";
            const connection = await amqp.connect("amqp://localhost");
            const channel = await connection.createChannel();
            let doubledValue;
            process.once("SIGINT", async () => {
                await channel.close();
                await connection.close();
            });

            await channel.assertQueue(queue, { durable: false });
            await channel.consume(
                queue,
                async (message) => {
                    if (message) {
                        await new Promise(resolve => setTimeout(resolve, 5000));

                        const number = message.content.toString();
                        const convertToNumber = number.replace(/[^\d.-]/g, '');
                        doubledValue = convertToNumber * 2;
                        console.log(`Received ${convertToNumber * 2}`);
                    }
                },
                { noAck: true }
            )
            return;
        } catch (err) {
            console.warn(err);
        }
    }
}
export default new ProcessServices();