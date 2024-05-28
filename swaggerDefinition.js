const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Organization API',
      version: '1.0.0',
      description: 'API documentation for Organization management',
    },
    servers: [
      {
        //url: 'http://localhost:5000/api',
        url:'https://organization-crud.onrender.com/api',
        description: 'Development server',
      },
    ],
  },
  apis: ['./Routes/Orgroutes.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
