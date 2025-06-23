import { expect, test } from '@playwright/test';
import { Recommendations } from "./utils/recommendations";

const DEFAULT_RECOMMENDATIONS = ['CL-01-GY', 'AU-07-MT'];

test.describe("Recommendation List", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        await expect(page.getByText(/loading/i)).not.toBeVisible();
    })

    test("show recommendation items in a list", async ({ page }) => {
        const recommendations = new Recommendations(page);
        const items = await recommendations.getListItems();
        const recommendationsFor = await recommendations.getRecommendationSkus();

        expect(recommendationsFor).toStrictEqual(DEFAULT_RECOMMENDATIONS.join(","));
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