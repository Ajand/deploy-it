function tokenizeRule(rule) {
  // Remove any spaces in the rule
  const ruleWithoutSpaces = rule.replace(/\s+/g, "");

  // Define the regular expression to match tokens
  const tokenRegex = /([()])|([&|])|\d+/g;

  // Use the regular expression to split the rule into tokens
  const tokens = [];
  let match;
  while ((match = tokenRegex.exec(ruleWithoutSpaces)) !== null) {
    tokens.push(match[0]);
  }

  return tokens;
}

const checkRequirements = (tokens, requirements) => {
  const requirementsInRule = tokens.filter((token) => !isNaN(token));

  const expectedRequirements = requirements.map((r, i) => i + 1);
  console.log(requirementsInRule, expectedRequirements);

  const invalidRequirements = requirementsInRule.filter(
    (req) => !requirements.some((r, i) => i + 1 === Number(req))
  );

  const actualRequirements = [...new Set(requirementsInRule.map(Number))];

  console.log(
    actualRequirements.every((req) => expectedRequirements.includes(req)) &&
      actualRequirements.length !== expectedRequirements.length
  );
};

const validate = (rule, requirements) => {
  const tokens = tokenizeRule(rule);
  checkRequirements(tokens, requirements);
};

export default validate;
