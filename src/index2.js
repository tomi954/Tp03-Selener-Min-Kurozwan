import express from "express";
import cors from "cors";
import { pi, sumar, restar, multiplicar, dividir, array } from './modules/matematica.js';
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


app.get('/sumar/:n1/:n2' , (req,res) => {

var n1= req.params.n1;
var n2= req.params.n2;

var result= sumar(parseFloat(n1), parseFloat(n2))

res.send(result)

}
)

app.get('/restar/:n1/:n2' , (req,res) => {

    var n1= req.params.n1;
    var n2= req.params.n2;
    
    var result= restar(parseFloat(n1), parseFloat(n2))
    
    res.send(result)
    
    }
    )

    app.get('/multiplicar/:n1/:n2' , (req,res) => {

        var n1= req.params.n1;
        var n2= req.params.n2;
        
        var result= multiplicar(parseFloat(n1), parseFloat(n2))
        
        res.send(result)
        
        }
        )



        app.get('/dividir/:n1/:n2' , (req,res) => {

            var n1= req.params.n1;
            var n2= req.params.n2;
            
            if(n2==0)
            {
                res.status(400)
                res.send('El divisor no puede ser cero')
            }
            else
            {
                var result= dividir(parseFloat(n1), parseFloat(n2))
            }
           
            
            res.send(result)
            
            }
            )








app.listen(port,() => 
{
    console.log('Escucho fuerte y claro en el 2')
})