const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js')
const dogRoute=require('./Dogs')
const TemperamentRoute=require('./Temperaments')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/Dogs', dogRoute)
router.use('/Temperaments', TemperamentRoute)


module.exports = router;
