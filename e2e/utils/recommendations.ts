import { expect, Locator, Page } from "@playwright/test";

export class Recommendations {
    static readonly DEFAULT_LIST_SIZE = 4;
    private readonly RECOMMENDATIONS_CONTAINER_SELECTOR = 'recommendations-container';
    private readonly container: Locator;

    constructor(public readonly page: Page) {
        this.container = page.getByTestId(this.RECOMMENDATIONS_CONTAINER_SELECTOR);
    }

    async getRecommendationSkus() {
        return this.container.getAttribute("data-recommendations-for");
    }

    async getDataBoundary() {
        return this.container.getAttribute("data-boundary");
    }

    async getListItems() {
        const recommendations = await this.container.getByRole("listitem").all();
        return recommendations.map(item => ({
            link: item.getByRole("link"),
            image: item.getByRole("img")
        }))
    }

    async assertOnListItems(items: Awaited<ReturnType<Recommendations["getListItems"]>>) {
        for (const item of items) {
            await expect(item.link).toBeVisible();
            await expect(item.image).toBeVisible();
            expect(await item.link.getAttribute("href")).toBeDefined();
        }
    }
}