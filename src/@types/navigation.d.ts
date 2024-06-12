export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      newMealForm: undefined;
      newMealCreated: {
        title: string;
        isOnDiet: boolean;
      };
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
