import { Backlog } from 'backlog-js';
import { TranslationHelper } from '../createTranslationHelper.js';
import { ToolsetGroup } from '../types/toolsets.js';
import { countIssuesTool } from './countIssues.js';
import { getCategoriesTool } from './getCategories.js';
import { getCustomFieldsTool } from './getCustomFields.js';
import { getDocumentTool } from './getDocument.js';
import { getDocumentTreeTool } from './getDocumentTree.js';
import { getDocumentsTool } from './getDocuments.js';
import { getGitRepositoriesTool } from './getGitRepositories.js';
import { getGitRepositoryTool } from './getGitRepository.js';
import { getIssueTool } from './getIssue.js';
import { getIssueCommentsTool } from './getIssueComments.js';
import { getIssuesTool } from './getIssues.js';
import { getIssueTypesTool } from './getIssueTypes.js';
import { getMyselfTool } from './getMyself.js';
import { getNotificationsTool } from './getNotifications.js';
import { getNotificationsCountTool } from './getNotificationsCount.js';
import { getPrioritiesTool } from './getPriorities.js';
import { getProjectTool } from './getProject.js';
import { getProjectListTool } from './getProjectList.js';
import { getPullRequestTool } from './getPullRequest.js';
import { getPullRequestCommentsTool } from './getPullRequestComments.js';
import { getPullRequestsTool } from './getPullRequests.js';
import { getPullRequestsCountTool } from './getPullRequestsCount.js';
import { getResolutionsTool } from './getResolutions.js';
import { getSpaceTool } from './getSpace.js';
import { getSpaceActivitiesTool } from './getSpaceActivities.js';
import { getUserRecentUpdatesTool } from './getUserRecentUpdates.js';
import { getUserStarsCountTool } from './getUserStarsCount.js';
import { getUsersTool } from './getUsers.js';
import { getVersionMilestoneListTool } from './getVersionMilestoneList.js';
import { getWatchingListCountTool } from './getWatchingListCount.js';
import { getWatchingListItemsTool } from './getWatchingListItems.js';
import { getWikiTool } from './getWiki.js';
import { getWikiPagesTool } from './getWikiPages.js';
import { getWikisCountTool } from './getWikisCount.js';

export const allTools = (
  backlog: Backlog,
  helper: TranslationHelper
): ToolsetGroup => {
  return {
    toolsets: [
      {
        name: 'space',
        description: 'Read-only tools for Backlog space information and users.',
        enabled: false,
        tools: [
          getSpaceTool(backlog, helper),
          getSpaceActivitiesTool(backlog, helper),
          getUsersTool(backlog, helper),
          getUserStarsCountTool(backlog, helper),
          getMyselfTool(backlog, helper),
          getUserRecentUpdatesTool(backlog, helper),
        ],
      },
      {
        name: 'project',
        description: 'Read-only tools for projects, versions, categories, custom fields, and issue types.',
        enabled: false,
        tools: [
          getProjectListTool(backlog, helper),
          getProjectTool(backlog, helper),
          getVersionMilestoneListTool(backlog, helper),
          getCategoriesTool(backlog, helper),
          getCustomFieldsTool(backlog, helper),
          getIssueTypesTool(backlog, helper),
          getPrioritiesTool(backlog, helper),
          getResolutionsTool(backlog, helper),
        ],
      },
      {
        name: 'issue',
        description: 'Read-only tools for issues and their comments.',
        enabled: false,
        tools: [
          getIssueTool(backlog, helper),
          getIssuesTool(backlog, helper),
          countIssuesTool(backlog, helper),
          getIssueCommentsTool(backlog, helper),
        ],
      },
      {
        name: 'wiki',
        description: 'Read-only tools for wiki pages.',
        enabled: false,
        tools: [
          getWikiPagesTool(backlog, helper),
          getWikiTool(backlog, helper),
          getWikisCountTool(backlog, helper),
        ],
      },
      {
        name: 'git',
        description: 'Read-only tools for Git repositories and pull requests.',
        enabled: false,
        tools: [
          getGitRepositoriesTool(backlog, helper),
          getGitRepositoryTool(backlog, helper),
          getPullRequestsTool(backlog, helper),
          getPullRequestsCountTool(backlog, helper),
          getPullRequestTool(backlog, helper),
          getPullRequestCommentsTool(backlog, helper),
        ],
      },
      {
        name: 'notifications',
        description: 'Read-only tools for notifications and watching.',
        enabled: false,
        tools: [
          getNotificationsTool(backlog, helper),
          getNotificationsCountTool(backlog, helper),
          getWatchingListItemsTool(backlog, helper),
          getWatchingListCountTool(backlog, helper),
        ],
      },
      {
        name: 'document',
        description: 'Read-only tools for documents.',
        enabled: false,
        tools: [
          getDocumentsTool(backlog, helper),
          getDocumentTool(backlog, helper),
          getDocumentTreeTool(backlog, helper),
        ],
      },
    ],
  };
};
