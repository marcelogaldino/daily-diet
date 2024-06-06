export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      dashboard: {
        percentageStats: string;
        isOnDiet: boolean;
        bestSequence: number;
        totalMeals: number;
        negativeMeals: number;
        positiveMeals: number;
      };
    }
  }
}
