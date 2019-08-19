import { BaseService, RequestHelper, Sudo, BaseRequestOptions } from '../infrastructure';
import { ProjectId } from '.';

class Repositories extends BaseService {
  compare(projectId: ProjectId, from: string, to: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `projects/${pId}/repository/compare`, {
      from,
      to,
      ...options,
    });
  }

  contributors(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `projects/${pId}/repository/contributors`, options);
  }

  mergeBase(projectId: ProjectId, refs: string[], options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `projects/${pId}/repository/merge_base`, { refs, ...options });
  }

  showArchive(
    projectId: ProjectId, 
    options?: { 
      sha: string, format?: 'tar.gz' | 'tar.bz2' | 'tbz' | 'tbz2' | 'tb2' | 'bz2' | 'tar' | 'zip'
    } & Sudo
  ) {
    const pId = encodeURIComponent(projectId);
    let format = options && options.hasOwnProperty('format') ? `.${options.format}` : '';

    return RequestHelper.get(this, `projects/${pId}/repository/archive${format}`, options);
  }

  showBlob(projectId: ProjectId, sha: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `projects/${pId}/repository/blobs/${sha}`, options);
  }

  showBlobRaw(projectId: ProjectId, sha: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `projects/${pId}/repository/blobs/${sha}/raw`, options);
  }

  tree(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `projects/${pId}/repository/tree`, options);
  }
}

export default Repositories;
