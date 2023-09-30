import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays information about the repository", () => {
  const repository = {
    language: "js",
    stargazers_count: 4,
    open_issues: 6,
    forks: 17,
  };
  render(<RepositoriesSummary repository={repository} />);

  for (const value of Object.values(repository)) {
    const element = screen.getByText(new RegExp(value));
    expect(element).toBeInTheDocument();
  }
});
