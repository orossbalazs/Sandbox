/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-var */
import fs from "fs";
import http from "http";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        var age: number = 19; // number variable
        var name: string = "Oross Balázs"; // string variable
        var isUpdated: boolean = true; // Boolean variable
        let proba: string = "Alma";
        const proba2: string = "Alma";
        res.write(`${age} ${name} ${isUpdated}\n`);

        let asdtomb: Array<string>;
        asdtomb = ["asd", "qwe", "dsa"];
        for (var i in asdtomb) {
            res.write(`${asdtomb[i]}\t`);
        }
        res.write("\n");
        asdtomb.push("ewq");
        asdtomb.sort(); 
        console.log(asdtomb);
        for(var j = 0; j < asdtomb.length; j++)
        { 
            res.write(`${asdtomb[j]}\t`);
        }
        res.write("\n");
        
        
        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
