// This file is used to ensure that a user can only access the Checkout page after adding items to the Cart.

import { handleCheckoutAccess } from "@/src/core/interface/api/checkoutAccess";
export const GET = handleCheckoutAccess;
