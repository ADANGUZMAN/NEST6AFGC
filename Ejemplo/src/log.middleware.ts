import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";

@Injectable()
export class LogMiddleware implements NestMiddleware {

    resolve(nombreAplicacion: string, anio: number): MiddlewareFunction {
        return (request, response, next) => {
            const respuesta = {
                baseUrl: request.baseUrl,
                hostname: request.hostname,
                subdomains: request.subdomains,
                ip: request.ip,
                method: request.method,
                originalUrl: request.originalUrl,
                path: request.path,
                protocol: request.protocol,
                headers: request.headers,
            };
            console.log('**** DESDE MIDDLEWARE ****', nombreAplicacion, anio);
            console.log(respuesta);
            next(); // ERROR SI NO SE LLAMA
        };
    }
}