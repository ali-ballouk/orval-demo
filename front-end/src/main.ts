import { getBackend } from "./generated/api";

const api = getBackend();

async function main() {
    const response = await api.getApiUsers();

    const users = response.data;

    users.forEach(user => {
        console.log(user.name);
        console.log(user.email);
        console.log(user.role);
    });
}

main();