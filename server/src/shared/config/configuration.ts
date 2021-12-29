import { readFileSync } from "fs";
import * as yaml from 'js-yaml';
import { join } from 'path';

const ENV = process.env;

export default () => {
    return yaml.load(
        readFileSync(join(__dirname, '../../../config', `${ENV}.json`), 'utf-8')
    ) as Record<string, any>;
}