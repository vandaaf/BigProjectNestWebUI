import { faker } from '@faker-js/faker';

export function email(){
    return "automation." + faker.internet().toLowerCase();
}

export function password() {

}