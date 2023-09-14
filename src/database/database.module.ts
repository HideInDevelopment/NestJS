import { Module } from '@nestjs/common';
import { createConnection } from 'mysql2/promise';
const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: async () => {
    return await createConnection({
      host: 'your_mysql_host',
      user: 'your_mysql_user',
      password: 'your_mysql_password',
      database: 'your_mysql_database',
    });
  },
};

@Module({
  providers: [connectionFactory],
})
export class DatabaseModule {}
