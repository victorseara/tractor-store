import test, { expect } from "@playwright/test";
import { Recommendations } from "./utils/recommendations";

const PRODUCT_SKU = 'CL-08';

test.describe("Recommendation List", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(`/product/${PRODUCT_SKU}`);
    })

    test("show similar products in a list", async ({ page }) => {
        const recommendations = new Recommendations(page);
        const recommendationsFor = await recommendations.getRecommendationSkus();
        const items = await recommendations.getListItems();

        await recommendations.assertOnListItems(items);
        expect(recommendationsFor).toContain(PRODUCT_SKU);
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