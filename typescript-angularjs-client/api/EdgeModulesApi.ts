/**
 * EMS API Documentation
 * Enterprise Mobility Services API      [Learn about EMS](https://www.embarcadero.com/products/rad-studio/enterprise-mobility-services)      EMS (Enterprise Mobility Services) offers a Mobile Enterprise Application Platform (MEAP)      TurnKey Middleware for Interconnected Distributed Apps
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class EdgeModulesApi {
    protected basePath = 'http://localhost:8080';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     *  |      Used to retrieve all data from `EdgeModule`.      Optional query param of **skip, limit, order, where** determines       size of returned array, filtered and order by.
     * @summary Get Module
     * @param mname Is the unique EMS EdgeModule identifier
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public getModule (mname: string, xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.EdgeModuleObject> {
        const localVarPath = this.basePath + '/edgemodules/{mname}'
            .replace('{' + 'mname' + '}', encodeURIComponent(String(mname)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'mname' is not null or undefined
        if (mname === null || mname === undefined) {
            throw new Error('Required parameter mname was null or undefined when calling getModule.');
        }

        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     *  |      Used to retrieve all data from a resource of an EdgeModule. **mname** is the unique EMS EdgeModule identifier in the EMS database. **resourcename** is the name of the resource.
     * @summary Get EdgeModule Resource
     * @param mname Is the unique EMS EdgeModule identifier
     * @param name Is the unique EMS EdgeModule Resource name
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public getModuleResource (mname: string, name: string, xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.EdgeModuleResourceObject> {
        const localVarPath = this.basePath + '/edgemodules/{mname}/resources/{name}'
            .replace('{' + 'mname' + '}', encodeURIComponent(String(mname)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'mname' is not null or undefined
        if (mname === null || mname === undefined) {
            throw new Error('Required parameter mname was null or undefined when calling getModuleResource.');
        }

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getModuleResource.');
        }

        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     *  |      Used to retrieve all data from the resources of an EdgeModule.
     * @summary Get EdgeModule Resources
     * @param mname Is the unique EMS EdgeModule identifier
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public getModuleResources (mname: string, xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.EdgeModuleResourceObject>> {
        const localVarPath = this.basePath + '/edgemodules/{mname}/resources'
            .replace('{' + 'mname' + '}', encodeURIComponent(String(mname)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'mname' is not null or undefined
        if (mname === null || mname === undefined) {
            throw new Error('Required parameter mname was null or undefined when calling getModuleResources.');
        }

        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     *  |      Used to retrieve all data from `EdgeModule`.      Optional query param of **skip, limit, order, where** determines       size of returned array, filtered and order by.
     * @summary Get Module
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public getModules (xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.EdgeModuleObject>> {
        const localVarPath = this.basePath + '/edgemodules';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     *  |      Used to retrieve all the `field names` of the EMS EdgeModule (including the custom fields).
     * @summary Get Fields
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public getModulesFields (xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.FieldsEdgeModuleObject> {
        const localVarPath = this.basePath + '/edgemodules/fields';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     *  |      Used to retrieve all data from the resources of all EdgeModules.
     * @summary Get EdgeModules Resources
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public getResources (xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.EdgeModuleResourceObject>> {
        const localVarPath = this.basePath + '/edgemodules/resources';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     *  |      Used to retrieve the `field names` of all the resources of the EMS EdgeModule (including the custom fields).
     * @summary Get Resource Fields
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public getResourcesFields (xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.FieldsEdgeModuleObject> {
        const localVarPath = this.basePath + '/edgemodules/resources/fields';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     *  |      Used to add a new `EdgeModule` object to the EMS database.
     * @summary Add Module
     * @param body EdgeModule object to add. protocolprops example string {\\\&quot;port\\\&quot;:8082,\\\&quot;host\\\&quot;:\\\&quot;10.150.40.52\\\&quot;}
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public registerModule (body: models.EdgeModuleAddObject, xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.EdgeModuleAddedObject> {
        const localVarPath = this.basePath + '/edgemodules';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling registerModule.');
        }

        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     *  |      Used to register a new resource from an EMS EdgeModule. **mname** is the unique EMS EdgeModule identifier in the EMS database.
     * @summary Add Module Resource
     * @param mname Is the unique EMS EdgeModule identifier
     * @param body EdgModule Resource add object. protocolprops string example {\\\&quot;port\\\&quot;:8082,\\\&quot;host\\\&quot;:\\\&quot;10.150.40.52\\\&quot;}
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public registerModuleResource (mname: string, body: models.EdgeModuleResourceAddObject, xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.EdgeModuleResourceAddedObject> {
        const localVarPath = this.basePath + '/edgemodules/{mname}/resources'
            .replace('{' + 'mname' + '}', encodeURIComponent(String(mname)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'mname' is not null or undefined
        if (mname === null || mname === undefined) {
            throw new Error('Required parameter mname was null or undefined when calling registerModuleResource.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling registerModuleResource.');
        }

        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     *  |      Used to delete an `EdgeModule Resource`. **mname** is the unique EMS EdgeModule identifier (MID) in the EMS database. **resourcename** is the name of the resource.
     * @summary Delete Module
     * @param mname Is the unique EMS EdgeModule identifier
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public unregisterModule (mname: string, xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/edgemodules/{mname}'
            .replace('{' + 'mname' + '}', encodeURIComponent(String(mname)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'mname' is not null or undefined
        if (mname === null || mname === undefined) {
            throw new Error('Required parameter mname was null or undefined when calling unregisterModule.');
        }

        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     *  |      Used to delete an `EdgeModule Resource`. **mname** is the unique EMS EdgeModule identifier (MID) in the EMS database. **resourcename** is the name of the resource.
     * @summary Delete Module Resource
     * @param mname Is the unique EMS EdgeModule identifier
     * @param name Is the unique EMS EdgeModule Resource name
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public unregisterModuleResource (mname: string, name: string, xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/edgemodules/{mname}/resources/{name}'
            .replace('{' + 'mname' + '}', encodeURIComponent(String(mname)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'mname' is not null or undefined
        if (mname === null || mname === undefined) {
            throw new Error('Required parameter mname was null or undefined when calling unregisterModuleResource.');
        }

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling unregisterModuleResource.');
        }

        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     *  |      Used to update an `EdgeModule`. **mname** is the unique EMS EdgeModule identifier (MID) in the EMS database.
     * @summary Update Module
     * @param mname Is the unique EMS EdgeModule identifier
     * @param body EdgModule Resource add object. protocolprops string example {\\\&quot;port\\\&quot;:8082,\\\&quot;host\\\&quot;:\\\&quot;10.150.40.52\\\&quot;}
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public updateModule (mname: string, body: models.EdgeModuleUpdateObject, xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.EdgeModuleUpdatedObject> {
        const localVarPath = this.basePath + '/edgemodules/{mname}'
            .replace('{' + 'mname' + '}', encodeURIComponent(String(mname)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'mname' is not null or undefined
        if (mname === null || mname === undefined) {
            throw new Error('Required parameter mname was null or undefined when calling updateModule.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateModule.');
        }

        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     *  |      Used to update an `EdgeModule`. **mname** is the unique EMS EdgeModule identifier (MID) in the EMS database.
     * @summary Update Module Resource
     * @param mname Is the unique EMS EdgeModule identifier
     * @param name Is the unique EMS EdgeModule Resource name
     * @param body EdgModule Resource add object. protocolprops string example {\\\&quot;port\\\&quot;:8082,\\\&quot;host\\\&quot;:\\\&quot;10.150.40.52\\\&quot;}
     * @param xEmbarcaderoApplicationId 
     * @param xEmbarcaderoAppSecret 
     * @param xEmbarcaderoMasterSecret 
     */
    public updateModuleResource (mname: string, name: string, body: models.EdgeModuleResourceUpdateObject, xEmbarcaderoApplicationId?: string, xEmbarcaderoAppSecret?: string, xEmbarcaderoMasterSecret?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.EdgeModuleResourceUpdatedObject> {
        const localVarPath = this.basePath + '/edgemodules/{mname}/resources/{name}'
            .replace('{' + 'mname' + '}', encodeURIComponent(String(mname)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'mname' is not null or undefined
        if (mname === null || mname === undefined) {
            throw new Error('Required parameter mname was null or undefined when calling updateModuleResource.');
        }

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling updateModuleResource.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateModuleResource.');
        }

        headerParams['X-Embarcadero-Application-Id'] = xEmbarcaderoApplicationId;

        headerParams['X-Embarcadero-App-Secret'] = xEmbarcaderoAppSecret;

        headerParams['X-Embarcadero-Master-Secret'] = xEmbarcaderoMasterSecret;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
