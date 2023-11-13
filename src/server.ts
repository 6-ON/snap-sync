import express,{Express, Request, Response} from 'express';

const app: Express = express();

type TUser = {
    name: string,
    age: number
}
app.get('/', (req:Request<{},any, TUser>, res:Response) => {
    res.send('Hello World');
});
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
console.log('Hello World');