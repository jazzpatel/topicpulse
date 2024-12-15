/**
 * Generate survey data where the sum of 'value' properties equals 1
 * @param {Object} options - Configuration options for survey data generation
 * @param {number} [options.numSurveys=1] - Number of surveys to generate
 * @param {string[]} [options.axes=['Agree', 'Disagree', 'Not sure']] - Axes for the survey
 * @param {number} [options.precision=2] - Number of decimal places for values
 * @returns {Array} Generated survey data
 */
function generateSurveyData(options = {}) {
  const {
    numSurveys = 1,
    axes = ["Agree", "Disagree", "Not sure"],
    precision = 2,
  } = options;

  /**
   * Generate a single survey with values summing to 1
   * @returns {Array} Single survey data array
   */
  function generateSingleSurvey() {
    // Generate initial random values
    // const values = axes.map(() => Math.random());

    // // Calculate total to normalize
    // const total = values.reduce((sum, val) => sum + val, 0);

    // // Normalize values to sum to 1
    // const normalizedValues = values.map((val) =>
    //   Number((val / total).toFixed(precision))
    // );

    // // Correct for any minor floating-point inaccuracies
    // const diff = 1 - normalizedValues.reduce((sum, val) => sum + val, 0);
    // normalizedValues[0] += diff;

    // Create survey data objects
    const axis_values = axes.map(() => Math.floor(Math.random() * 100));
    const axis_total = axis_values.reduce((sum, val) => sum + val, 0);
    const axis_normalizedValues = axis_values.map((val) =>
      Number((val / axis_total).toFixed(precision))
    );

    return {
      survey_total_count: axis_total,
      survey_axes: new Array(
        axes.map((axis, index) => {
          return {
            axis,
            count: axis_values[index],
            value: axis_normalizedValues[index],
            index: index,
          };
        })
      ),
    };
  }

  // Generate multiple surveys
  return Array.from({ length: numSurveys }, generateSingleSurvey);
}

/**
 * Validate that the survey data meets requirements
 * @param {Array} surveyData - Generated survey data
 * @returns {Array} Detailed validation results
 */
function validateSurveyData(surveyData) {
  return surveyData.map((survey) => {
    // Calculate total value
    const totalValue = survey.reduce((sum, item) => sum + item.value, 0);

    // Check if total is approximately 1 (within a small tolerance)
    const isValid = Math.abs(totalValue - 1) < 1e-9;

    return {
      survey,
      totalValue,
      isValid,
    };
  });
}

/**
 * Demonstrate survey data generation with validation
 */
function demonstrateSurveyDataGeneration() {
  console.log("Survey Data Generation Demonstration");
  console.log("-".repeat(50));

  // Survey configuration options
  const surveyConfigs = [
    // Default configuration
    { numSurveys: 3 },

    // Custom axes
    {
      numSurveys: 2,
      axes: [
        "Strongly Agree",
        "Agree",
        "Neutral",
        "Disagree",
        "Strongly Disagree",
      ],
    },

    // Different precision
    { numSurveys: 2, precision: 3 },
  ];

  // Seed for consistent random generation
  Math.seedrandom && Math.seedrandom("42");

  // Process each configuration
  surveyConfigs.forEach((config, configIndex) => {
    console.log(`\nConfiguration #${configIndex + 1}:`, config);

    // Generate survey data
    const surveyData = generateSurveyData(config);

    // Validate and display results
    const validationResults = validateSurveyData(surveyData);

    validationResults.forEach((result, index) => {
      console.log(`\nSurvey #${index + 1}:`);
      console.log("Data:", JSON.stringify(result.survey));
      console.log("Total Value:", result.totalValue);
      console.log("Valid:", result.isValid);
    });

    console.log("-".repeat(50));
  });
}

// Export functions for module usage
export {
  generateSurveyData,
  validateSurveyData,
  demonstrateSurveyDataGeneration,
};

// Run demonstration if not in module context
// if (typeof window === "undefined" && require.main === module) {
// demonstrateSurveyDataGeneration();
// }
