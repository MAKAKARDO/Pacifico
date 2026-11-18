const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

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

  if (!nombre || !apellidoPaterno || !correo || !tipoEmpresa || !tipoServicio) {
    return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
  }

  try {
    const destinatarios = process.env.EMAIL_DESTINO;

    if (!destinatarios) {
      return res.status(500).json({ success: false, message: 'No se configuraron correos de destino' });
    }

    await transporter.sendMail({
      from: `"Pacifico Contacto" <${process.env.GMAIL_USER}>`,
      to: destinatarios,
      subject: `Nuevo contacto: ${nombre} ${apellidoPaterno}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2563eb;">📬 Nuevo formulario de contacto</h2>
          <p><strong>Nombre:</strong> ${nombre} ${apellidoPaterno} ${apellidoMaterno || ''}</p>
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