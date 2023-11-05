import { DataSource } from 'typeorm';
const dataSource = new DataSource({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pos',
      synchronize: true,
      logging: true,
      entities: ["./src/entity/*"],
      subscribers: [],
      migrations: [],
})

dataSource.initialize()
.then(() => {
    console.log('Successfully initialized database');
})
.catch((error) => console.log(error))

// module.exports = {dataSource}
export default dataSource

