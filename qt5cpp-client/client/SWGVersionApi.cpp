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

#include "SWGVersionApi.h"
#include "SWGHelpers.h"
#include "SWGModelFactory.h"
#include "SWGQObjectWrapper.h"

#include <QJsonArray>
#include <QJsonDocument>

namespace Swagger {

SWGVersionApi::SWGVersionApi() {}

SWGVersionApi::~SWGVersionApi() {}

SWGVersionApi::SWGVersionApi(QString host, QString basePath) {
    this->host = host;
    this->basePath = basePath;
}

void
SWGVersionApi::getVersion(QString* x_embarcadero_application_id, QString* x_embarcadero_app_secret, QString* x_embarcadero_master_secret) {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/version");



    SWGHttpRequestWorker *worker = new SWGHttpRequestWorker();
    SWGHttpRequestInput input(fullPath, "GET");




    if (x_embarcadero_application_id != nullptr) {
        input.headers.insert("X-Embarcadero-Application-Id", "x_embarcadero_application_id");
    }
    if (x_embarcadero_app_secret != nullptr) {
        input.headers.insert("X-Embarcadero-App-Secret", "x_embarcadero_app_secret");
    }
    if (x_embarcadero_master_secret != nullptr) {
        input.headers.insert("X-Embarcadero-Master-Secret", "x_embarcadero_master_secret");
    }

    foreach(QString key, this->defaultHeaders.keys()) {
        input.headers.insert(key, this->defaultHeaders.value(key));
    }

    connect(worker,
            &SWGHttpRequestWorker::on_execution_finished,
            this,
            &SWGVersionApi::getVersionCallback);

    worker->execute(&input);
}

void
SWGVersionApi::getVersionCallback(SWGHttpRequestWorker * worker) {
    QString msg;
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type == QNetworkReply::NoError) {
        msg = QString("Success! %1 bytes").arg(worker->response.length());
    }
    else {
        msg = "Error: " + worker->error_str;
    }

    QString json(worker->response);
    SWGVersionObject* output = static_cast<SWGVersionObject*>(create(json, QString("SWGVersionObject")));
    auto wrapper = new SWGQObjectWrapper<SWGVersionObject*> (output);
    wrapper->deleteLater();
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        emit getVersionSignal(output);
    } else {
        emit getVersionSignalE(output, error_type, error_str);
        emit getVersionSignalEFull(worker, error_type, error_str);
    }
}


}
