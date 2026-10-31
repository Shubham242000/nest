import { SetMetadata } from "@nestjs/common"

export const Roles = (role: string | string[]) => {
    return SetMetadata('role', role);
}