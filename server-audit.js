const http = require('http');

// Módulo de Auditoría de Seguridad simulado (Nueva característica del Lab 4)
function obtenerEstadoAuditoria() {
    return {
        sistema: "BanCoop Core Auth",
        estadoAuditoria: "APROBADO",
        nivelSeguridad: "Alto (JWT + Biometría)",
        ultimoScan: new Date().toLocaleString()
    };
}

const server = http.createServer((req, res) => {
    if (req.url === '/auditoria') {
        const auditoria = obtenerEstadoAuditoria();

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>BanCoop - Panel de Auditoría</title>
                <style>
                    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #eef2f3; margin: 0; padding: 40px; display: flex; justify-content: center; align-items: center; height: 100vh; }
                    .audit-card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); width: 450px; border-left: 6px solid #0056b3; }
                    h2 { color: #003d82; margin-top: 0; }
                    .badge-audit { background: #d4edda; color: #155724; padding: 5px 10px; border-radius: 15px; font-weight: bold; font-size: 12px; display: inline-block; margin-bottom: 15px; }
                    .info-row { margin-bottom: 10px; font-size: 14px; color: #444; }
                    .btn-back { display: inline-block; margin-top: 20px; text-decoration: none; background: #0056b3; color: white; padding: 8px 15px; border-radius: 6px; font-weight: bold; }
                    .btn-back:hover { background: #00264d; }
                </style>
            </head>
            <body>
                <div class="audit-card">
                    <h2>🔍 Auditoría BanCoop IT</h2>
                    <span class="badge-audit">Estado: ${auditoria.estadoAuditoria}</span>
                    <div class="info-row"><strong>Sistema:</strong> ${auditoria.sistema}</div>
                    <div class="info-row"><strong>Nivel de Seguridad:</strong> ${auditoria.nivelSeguridad}</div>
                    <div class="info-row"><strong>Último Escaneo:</strong> ${auditoria.ultimoScan}</div>
                    <a href="/" class="btn-back">Volver al Inicio</a>
                </div>
            </body>
            </html>
        `);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8";>
                <title>BanCoop - Inicio</title>
                <style>
                    body { font-family: 'Segoe UI', sans-serif; text-align: center; padding-top: 80px; background: #f8f9fa; }
                    h1 { color: #003d82; }
                    .link-audit { display: inline-block; background: #28a745; color: white; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 20px; }
                    .link-audit:hover { background: #218838; }
                </style>
            </head>
            <body>
                <h1>Bienvenido al Sistema BanCoop</h1>
                <p>Proyecto Integrador - Nodo Colaborativo (Lab 4)</p>
                <br>
                <a href="/auditoria" class="link-audit">Ver Panel de Auditoría de Seguridad</a>
            </body>
            </html>
        `);
    }
});

server.listen(3000, () => {
    console.log('Servidor con módulo de auditoría activo en: http://localhost:3000');
});