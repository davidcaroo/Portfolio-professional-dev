# GitHub Actions - Deploy Workflow

Este archivo documenta el workflow de CI/CD configurado para el portfolio.

## 📋 Descripción

El workflow `deploy.yml` automatiza el proceso de construcción y deploy del portfolio cada vez que se hace push a la rama `main`.

## 🚀 Triggers del Workflow

- **Push a main**: Se ejecuta automáticamente
- **Pull Request a main**: Para verificar cambios antes del merge
- **Manual**: Se puede ejecutar manualmente desde GitHub Actions

## 🔄 Pasos del Workflow

### 1. **Build y Test**
- ✅ Checkout del código
- ✅ Setup de Node.js 18
- ✅ Instalación de dependencias (`npm ci`)
- ✅ Verificación de linting (`npm run lint`)
- ✅ Build del proyecto (`npm run build`)

### 2. **Artefactos**
- ✅ Subida de archivos build como artefactos
- ✅ Retención por 30 días para debugging

### 3. **Deploy (Opcional)**
- 🔧 Configurado para FTP deploy a Hostinger
- 🔐 Requiere configuración de secrets

## ⚙️ Configuración para Deploy Automático

Para habilitar el deploy automático a Hostinger, configura estos secrets en GitHub:

### Secrets Requeridos

1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. Agrega estos secrets:

```
HOSTINGER_FTP_SERVER=your-ftp-server.com
HOSTINGER_FTP_USERNAME=your-ftp-username
HOSTINGER_FTP_PASSWORD=your-ftp-password
```

### Habilitar Deploy

Descomenta las líneas del deploy FTP en el archivo `deploy.yml`:

```yaml
- name: Deploy vía FTP
  uses: SamKirkland/FTP-Deploy-Action@v4.3.4
  with:
    server: ${{ secrets.HOSTINGER_FTP_SERVER }}
    username: ${{ secrets.HOSTINGER_FTP_USERNAME }}
    password: ${{ secrets.HOSTINGER_FTP_PASSWORD }}
    local-dir: ./dist/
    server-dir: /public_html/
```

## 📁 Estructura de Deploy

```
/public_html/              # Directorio raíz de Hostinger
├── index.html            # Archivo principal
├── .htaccess            # Configuración de Apache
├── assets/              # CSS, JS, imágenes optimizadas
│   ├── css/
│   ├── js/
│   └── images/
└── [otros archivos]     # Manifest, favicon, CV, etc.
```

## 🔍 Monitoreo

- **GitHub Actions**: Ve a la pestaña "Actions" en tu repositorio
- **Build Status**: Cada push mostrará el estado del build
- **Artefactos**: Descarga los archivos build para verificación
- **Logs**: Revisa logs detallados de cada paso

## 🚨 Troubleshooting

### Error de Linting
```bash
npm run lint
```

### Error de Build
```bash
npm run build
```

### Error de FTP
- Verificar credentials en secrets
- Comprobar permisos del directorio en Hostinger
- Revisar URL del servidor FTP

## 🔄 Flujo de Trabajo Recomendado

1. **Desarrollo Local**
   ```bash
   npm run dev
   ```

2. **Testing**
   ```bash
   npm run lint
   npm run build
   ```

3. **Push a GitHub**
   ```bash
   git push origin main
   ```

4. **Verificar Deploy**
   - GitHub Actions se ejecuta automáticamente
   - Verificar en tu sitio web
   - Revisar logs si hay errores

## 📈 Optimizaciones Futuras

- **Tests automatizados**: Agregar unit tests
- **Lighthouse CI**: Verificación automática de performance
- **Security scanning**: Análisis de vulnerabilidades
- **Notifications**: Notificaciones en Discord/Slack
- **Staging environment**: Deploy a entorno de pruebas

---

**Autor**: David Caro  
**Fecha**: Agosto 2025  
**Versión**: 1.0
