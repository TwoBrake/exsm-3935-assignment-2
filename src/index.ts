/** Accepted discount codes. */
type DiscountCode = "0" | "1" | "2" | "3" | "4" | "5";

// Constants
const TOTAL_COST = 30;
const CASH_PAYMENT = 20;
const DISCOUNT_CODE = "5" as DiscountCode; // I needed to infer the type since if I use 'satisfies' or ':' declaration, TypeScript determines it as always the inputted type causing the 'switch' statement to error.

/** Just the entrypoint of the application, called at the bottom of the program. */
const main = () => {
    /**
     * Simple math logic for converting percent based on total value into a fixed number.
     * 
     * @param percent The percentage.
     * @param total The maximum/total value.
     * 
     * @returns The fixed number.
     */
    const fromPercent = (percent: number, total: number): number => total - (total * (percent / 100));

    /** The discount percentage to use after the 'switch' statement runs. */
    let discountPercentage: number;

    // Determine the discount percentage factor based on criteria.
    switch(DISCOUNT_CODE) {
        default: {
            discountPercentage = 0;
            break;
        }
        case "0": {
            discountPercentage = 0;
            break;
        }
        case "1": {
            discountPercentage = 10;
            break;
        }
        case "2": {
            discountPercentage = 15;
            break;
        }
        case "3": {
            discountPercentage = 25;
            break;
        }
        case "4": {
            discountPercentage = 35;
            break;
        }
        case "5": {
            discountPercentage = 40;
            break;
        }
    }

    /** The total cost of the product after the discount percentage factor is applied to the total cost. */
    const costAfter = fromPercent(discountPercentage, TOTAL_COST);

    // Inform the user of the final result based on their cash payment value.
    if (costAfter > CASH_PAYMENT) {
        console.log("Insufficient payment.");
    } else {
        console.log(`Successfully purchased for $${String(costAfter)}. Change with ${String(discountPercentage)}% is $${String(CASH_PAYMENT - costAfter)}.`);
    }
};

void main();