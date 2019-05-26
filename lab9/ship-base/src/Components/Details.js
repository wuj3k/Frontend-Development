import React from "react";

getData() {
    return (
        <div>
            <h1>Dane statku</h1>
            <ul>
                <li>Nazwa: {this.name}</li>
                <li>W użyciu: {this.inService}</li>
                <li>Nr stoczni: {this.yardNumber}</li>
                <li>Numer rejstracji: {this.imoNumber}</li>
            </ul>
        </div>
    );
}