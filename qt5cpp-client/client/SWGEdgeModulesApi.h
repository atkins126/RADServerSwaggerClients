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

#ifndef _SWG_SWGEdgeModulesApi_H_
#define _SWG_SWGEdgeModulesApi_H_

#include "SWGHttpRequest.h"

#include <QString>
#include "SWGEdgeModuleAddObject.h"
#include "SWGEdgeModuleAddedObject.h"
#include "SWGEdgeModuleObject.h"
#include "SWGEdgeModuleResourceAddObject.h"
#include "SWGEdgeModuleResourceAddedObject.h"
#include "SWGEdgeModuleResourceObject.h"
#include "SWGEdgeModuleResourceUpdateObject.h"
#include "SWGEdgeModuleResourceUpdatedObject.h"
#include "SWGEdgeModuleUpdateObject.h"
#include "SWGEdgeModuleUpdatedObject.h"
#include "SWGFieldsEdgeModuleObject.h"

#include <QObject>

namespace Swagger {

class SWGEdgeModulesApi: public QObject {
    Q_OBJECT

public:
    SWGEdgeModulesApi();
    SWGEdgeModulesApi(QString host, QString basePath);
    ~SWGEdgeModulesApi();

    QString host;
    QString basePath;
    QMap<QString, QString> defaultHeaders;

    void getModule(QString* mname, QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    void getModuleResource(QString* mname, QString* name, QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    void getModuleResources(QString* mname, QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    void getModules(QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    void getModulesFields(QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    void getResources(QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    void getResourcesFields(QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    void registerModule(SWGEdgeModuleAddObject& body, QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    void registerModuleResource(QString* mname, SWGEdgeModuleResourceAddObject& body, QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    void unregisterModule(QString* mname, QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    void unregisterModuleResource(QString* mname, QString* name, QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    void updateModule(QString* mname, SWGEdgeModuleUpdateObject& body, QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    void updateModuleResource(QString* mname, QString* name, SWGEdgeModuleResourceUpdateObject& body, QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret);
    
private:
    void getModuleCallback (SWGHttpRequestWorker * worker);
    void getModuleResourceCallback (SWGHttpRequestWorker * worker);
    void getModuleResourcesCallback (SWGHttpRequestWorker * worker);
    void getModulesCallback (SWGHttpRequestWorker * worker);
    void getModulesFieldsCallback (SWGHttpRequestWorker * worker);
    void getResourcesCallback (SWGHttpRequestWorker * worker);
    void getResourcesFieldsCallback (SWGHttpRequestWorker * worker);
    void registerModuleCallback (SWGHttpRequestWorker * worker);
    void registerModuleResourceCallback (SWGHttpRequestWorker * worker);
    void unregisterModuleCallback (SWGHttpRequestWorker * worker);
    void unregisterModuleResourceCallback (SWGHttpRequestWorker * worker);
    void updateModuleCallback (SWGHttpRequestWorker * worker);
    void updateModuleResourceCallback (SWGHttpRequestWorker * worker);
    
signals:
    void getModuleSignal(SWGEdgeModuleObject* summary);
    void getModuleResourceSignal(SWGEdgeModuleResourceObject* summary);
    void getModuleResourcesSignal(QList<SWGEdgeModuleResourceObject*>* summary);
    void getModulesSignal(QList<SWGEdgeModuleObject*>* summary);
    void getModulesFieldsSignal(SWGFieldsEdgeModuleObject* summary);
    void getResourcesSignal(QList<SWGEdgeModuleResourceObject*>* summary);
    void getResourcesFieldsSignal(SWGFieldsEdgeModuleObject* summary);
    void registerModuleSignal(SWGEdgeModuleAddedObject* summary);
    void registerModuleResourceSignal(SWGEdgeModuleResourceAddedObject* summary);
    void unregisterModuleSignal();
    void unregisterModuleResourceSignal();
    void updateModuleSignal(SWGEdgeModuleUpdatedObject* summary);
    void updateModuleResourceSignal(SWGEdgeModuleResourceUpdatedObject* summary);
    
    void getModuleSignalE(SWGEdgeModuleObject* summary, QNetworkReply::NetworkError error_type, QString& error_str);
    void getModuleResourceSignalE(SWGEdgeModuleResourceObject* summary, QNetworkReply::NetworkError error_type, QString& error_str);
    void getModuleResourcesSignalE(QList<SWGEdgeModuleResourceObject*>* summary, QNetworkReply::NetworkError error_type, QString& error_str);
    void getModulesSignalE(QList<SWGEdgeModuleObject*>* summary, QNetworkReply::NetworkError error_type, QString& error_str);
    void getModulesFieldsSignalE(SWGFieldsEdgeModuleObject* summary, QNetworkReply::NetworkError error_type, QString& error_str);
    void getResourcesSignalE(QList<SWGEdgeModuleResourceObject*>* summary, QNetworkReply::NetworkError error_type, QString& error_str);
    void getResourcesFieldsSignalE(SWGFieldsEdgeModuleObject* summary, QNetworkReply::NetworkError error_type, QString& error_str);
    void registerModuleSignalE(SWGEdgeModuleAddedObject* summary, QNetworkReply::NetworkError error_type, QString& error_str);
    void registerModuleResourceSignalE(SWGEdgeModuleResourceAddedObject* summary, QNetworkReply::NetworkError error_type, QString& error_str);
    void unregisterModuleSignalE(QNetworkReply::NetworkError error_type, QString& error_str);
    void unregisterModuleResourceSignalE(QNetworkReply::NetworkError error_type, QString& error_str);
    void updateModuleSignalE(SWGEdgeModuleUpdatedObject* summary, QNetworkReply::NetworkError error_type, QString& error_str);
    void updateModuleResourceSignalE(SWGEdgeModuleResourceUpdatedObject* summary, QNetworkReply::NetworkError error_type, QString& error_str);
    
    void getModuleSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void getModuleResourceSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void getModuleResourcesSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void getModulesSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void getModulesFieldsSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void getResourcesSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void getResourcesFieldsSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void registerModuleSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void registerModuleResourceSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void unregisterModuleSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void unregisterModuleResourceSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void updateModuleSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    void updateModuleResourceSignalEFull(SWGHttpRequestWorker* worker, QNetworkReply::NetworkError error_type, QString& error_str);
    
};

}
#endif
