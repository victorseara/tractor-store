import test, { expect } from "@playwright/test";
import { Recommendations } from "./utils/recommendations";

test.describe("Recommendation List", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/checkout/cart');
        await expect(page.getByText(/loading/i)).not.toBeVisible();
    })

    test("show recommendation items in a list", async ({ page }) => {
        const recommendations = new Recommendations(page);
        const items = await recommendations.getListItems();
        
        await recommendations.assertOnListItems(items);
        expect(items).toHaveLength(Recommendations.DEFAULT_LIST_SIZE);
    });

    test("navigates to product's page when clicked", async ({ page }) => {
        const recommendations = new Recommendations(page);
        const items = await recommendations.getListItems();
        const product = items[0];

        await expect(product.link).toBeVisible();

        const productLink = await product.link.getAttribute("href");
        expect(productLink).toBeDefined();

        await product.link.click();
        await page.waitForURL(productLink!);
    })
})