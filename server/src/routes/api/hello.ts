import Koa from 'koa'
export const hello = async (ctx: Koa.Context) => {
    ctx.body = 'Hello World'
}