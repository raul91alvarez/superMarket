export interface IOwn {
    address: string,
    mail: string,
    name: string,
    phone: string,
    maps: IMaps
}

export interface IMaps {
    latitude: string,
    longitude: string
}