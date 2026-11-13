const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Permite que tu React (localhost:5173) se comunique con este backend
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Configurar Nodemailer con tu Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

// Endpoint que recibe el formulario y envía el correo
app.post('/contacto', async (req, res) => {
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    correo,
    tipoEmpresa,
    tipoServicio,
    mensaje
  } = req.body;

  try {
    // Correos de las personas encargadas (separados por coma)
    const destinatarios = 'encargado1@gmail.com, encargado2@gmail.com, tu_correo@gmail.com';

    await transporter.sendMail({
      from: `"Pacifico Contacto" <${process.env.GMAIL_USER}>`,
      to: destinatarios,
      subject: `Nuevo contacto: ${nombre} ${apellidoPaterno}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2563eb;">📬 Nuevo formulario de contacto</h2>
          <p><strong>Nombre:</strong> ${nombre} ${apellidoPaterno} ${apellidoMaterno}</p>
          <p><strong>Correo:</strong> ${correo}</p>
          <p><strong>Tipo de empresa:</strong> ${tipoEmpresa}</p>
          <p><strong>Tipo de servicio:</strong> ${tipoServicio}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Mensaje:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${mensaje || 'Sin mensaje adicional'}</p>
        </div>
      `
    });

    res.json({ success: true, message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});