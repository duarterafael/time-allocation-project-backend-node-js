import server from "./server";
const port = 4001

server.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
