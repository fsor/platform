import SnippetSetApiService from "./snippet-set.api.service";

const ApiService = Shopware.Classes.ApiService;

/**
 * Gateway for the API end point "system-info"
 * @class
 * @extends ApiService
 */
class SystemInfoApiService extends ApiService {
    constructor(httpClient, loginService, apiEndpoint = 'system-info') {
        super(httpClient, loginService, apiEndpoint);
        this.name = 'systemInfoService';
    }

    /**
     * @returns {Promise<T>}
     */
    getInfoList() {
        const headers = this.getBasicHeaders();

        return this.httpClient
            .get(
                `/_action/${this.getApiBasePath()}`,
                { headers }
            )
            .then((response) => {
                return ApiService.handleResponse(response);
            });
    }
}

export default SystemInfoApiService;
