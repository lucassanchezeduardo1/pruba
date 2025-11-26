import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsuariosModule } from './usuarios/usuarios.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { RutasModule } from './ruta/ruta.module';
import { AuthModule } from './auth/auth/auth.module';
import { DireccionesModule } from './direcciones/direcciones.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ClientesModule } from './clientes/clientes.module';
import { PreciosModule } from './precios/precios.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST || 'mysql.railway.internal',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'railway',
  autoLoadEntities: true,
  synchronize: false,
  // Configuración para Railway:
  connectTimeout: 60000, // 👈 Aumenta timeout
  acquireTimeout: 60000,
  extra: {
    connectionLimit: 5,
    ssl: false // 👈 Deshabilita SSL temporalmente
  }
}),

    UsuariosModule,
    NotificacionesModule,
    RutasModule,
    AuthModule,
    DireccionesModule,
    PedidosModule,
    ClientesModule,
    PreciosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
