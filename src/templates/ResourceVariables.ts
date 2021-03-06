import {
  BaseService,
  RequestHelper,
  BaseServiceOptions,
  PaginatedRequestOptions,
  BaseRequestOptions,
} from '../infrastructure';
import { ResourceId, KeyId } from '..';

class ResourceVariables extends BaseService {
  constructor(resourceType: string, options: BaseServiceOptions) {
    super({ url: resourceType, ...options });
  }

  all(resourceId: ResourceId, options?: PaginatedRequestOptions) {
    const rId = encodeURIComponent(resourceId);

    return RequestHelper.get(this, `${rId}/variables`, options);
  }

  create(resourceId: ResourceId, options?: BaseRequestOptions) {
    const rId = encodeURIComponent(resourceId);

    return RequestHelper.post(this, `${rId}/variables`, options);
  }

  edit(resourceId: ResourceId, keyId: KeyId, options?: BaseRequestOptions) {
    const [rId, kId] = [resourceId, keyId].map(encodeURIComponent);

    return RequestHelper.put(this, `${rId}/variables/${kId}`, options);
  }

  show(resourceId: ResourceId, keyId: KeyId, options?: PaginatedRequestOptions) {
    const [rId, kId] = [resourceId, keyId].map(encodeURIComponent);

    return RequestHelper.get(this, `${rId}/variables/${kId}`, options);
  }

  remove(resourceId: ResourceId, keyId: KeyId, options?: PaginatedRequestOptions) {
    const [rId, kId] = [resourceId, keyId].map(encodeURIComponent);

    return RequestHelper.del(this, `${rId}/variables/${kId}`, options);
  }
}

export default ResourceVariables;
