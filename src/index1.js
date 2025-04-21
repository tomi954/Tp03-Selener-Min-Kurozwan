import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get ('/', (req,res) =>
{
    res.send("¡Ya estoy respondiendo!")
})

app.get ('/saludar/:nombre', (req,res) =>
{
    var nombre=req.params.nombre;
    res.send("Hola " + nombre)
})

app.get ('/validarFecha/:anio/:mes/:dia', (req,res) =>
{
    var anio=req.params.anio;
    var mes=req.params.mes;
    var dia=req.params.dia;
    var fechaString = `-${anio}-${mes}-${dia}`
    var fecha = Date.parse(fechaString);
    if (isNaN(fecha))
    {
        res.status(404).send("La fecha es invalida")
       
    }
    else
    {
        res.status(200)
        res.send("La fecha seria " + anio + "/" + mes + "/" + dia)
    }
})

app.listen(port,() => 
{
    console.log('Escucho fuerte y claro')
})