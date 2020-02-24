import os

from github import Github

def set_up_github_client():
    GITHUB_TOKEN = os.environ['GITHUB_TOKEN']
    github = Github(GITHUB_TOKEN)
    return github

if __name__ == '__main__':
    github = set_up_github_client()
    repos = github.get_user().get_repos()
    for repo in repos:
        if(repo.name == 'authorizer'):
            print("yay")
            repo.create_label(name='test',color='f29513',description='')