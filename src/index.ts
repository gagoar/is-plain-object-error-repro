import { Octokit } from '@octokit/rest';

// Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories

export const run = async (): Promise<void> => {
  const octokit = new Octokit();

  const repos = await octokit.repos.listForOrg({
    org: 'octokit',
    type: 'public',
  });

  console.log(repos);
};
