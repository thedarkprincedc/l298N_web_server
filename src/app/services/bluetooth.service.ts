import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
@Injectable()

export class BluetoothService {
    socket: any;

    socketConnected$ = new BehaviorSubject<boolean>(false);
    constructor() {
        this.socket = io(environment.socket.baseUrl, environment.socket.opts);
        this.socket.on('connect', () => this.socketConnected$.next(true));
        this.socket.on('disconnect', () => this.socketConnected$.next(false));
        this.socketConnected$.asObservable().subscribe( connected => {
            console.log('Socket connected: ', connected);
            // this.socket.emit('send', {msg, usr, frq: this.frq });
        });
    }
    send(msg: Object) {
        if (msg) {
            this.socket.emit('bluetooth', msg);
        }
    }
    listen(event: string): Observable<any> {
        return new Observable(observer => {
            this.socket.on(event, data => {
                observer.next(data);
            });
            // observable is disposed
            return () => {
                this.socket.off(event);
            };
        });
    }
}
