import {
    createUuid,
    sample
} from "./uuid.js";
console.log(sample());
console.log(createUuid());
console.log(new Date().toISOString());