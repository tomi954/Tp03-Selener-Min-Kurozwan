import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb-wrapper.js';
import ValidacionesHelper from './modules/validaciones-helper.js';


app.get('/omdb/searchbypage', async (req, res) => {
  let search = ValidacionesHelper.getStringOrDefault(req.query.search, '');
  let p = ValidacionesHelper.getIntegerOrDefault(req.query.p, 1);

  try {
    const datos = await OMDBSearchByPage(search, p);
    res.status(200).json({
      respuesta: datos.length > 0,
      cantidadTotal: datos.length,
      datos
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar películas por página.' });
  }
});


app.get('/omdb/searchcomplete', async (req, res) => {
  let search = ValidacionesHelper.getStringOrDefault(req.query.search, '');

  try {
    const datos = await OMDBSearchComplete(search);
    res.status(200).json({
      respuesta: datos.length > 0,
      cantidadTotal: datos.length,
      datos
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al hacer búsqueda completa.' });
  }
});


app.get('/omdb/getbyomdbid', async (req, res) => {
  let imdbID = ValidacionesHelper.getStringOrDefault(req.query.imdbID, '');

  try {
    const datos = await OMDBGetByImdbID(imdbID);
    res.status(200).json({
      respuesta: datos !== null,
      cantidadTotal: datos ? 1 : 0,
      datos: datos || {}
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar película por ID.' });
  }
});
