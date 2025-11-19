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

import * as dotenv from 'dotenv';
dotenv.config(); // 👈 Cargar variables del .env

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,        
      port: parseInt(process.env.DB_PORT ?? '3306', 10),
      username: process.env.DB_USER,    
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,    
      autoLoadEntities: true,
      synchronize: false,               // EN PRODUCCIÓN SIEMPRE EN FALSE
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
