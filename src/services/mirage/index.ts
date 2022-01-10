import faker from 'faker'
import { createServer, Factory, Model, Response } from 'miragejs'

interface User {
  name: string
  email: string
  create_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `user ${i + 1}`
        },
        email() {
          return faker.internet.email().toLocaleLowerCase()
        },
        createdAt() {
          return faker.date.recent(10)
        },

      })
    },

    seeds(server) {
      server.createList('user', 200)

    },
    routes() {
      this.namespace = 'api'
      this.timing = 700

      this.get('/users', function (schema, request) {
        console.log(request.requestHeaders)
        const {  per_page = 10 } = request.params
        const page = Number(request.requestHeaders.page)

        console.log(`page: ${Number(request.requestHeaders.page)}`)

        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(per_page)
        const pageEnd = pageStart + Number(per_page)

        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        )
      })
      this.post('/users')

      this.namespace = ''
      this.passthrough()

    }
  })

  return server

}