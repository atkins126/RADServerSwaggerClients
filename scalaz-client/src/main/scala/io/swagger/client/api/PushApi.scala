package io.swagger.client.api

import argonaut._
import argonaut.EncodeJson._
import argonaut.DecodeJson._

import java.io.File
import java.net.URLEncoder
import java.util.UUID

import org.http4s._
import org.http4s.{EntityDecoder, EntityEncoder}
import org.http4s.argonaut._
import org.http4s.client._
import org.http4s.client.blaze.PooledHttp1Client
import org.http4s.headers._

import org.joda.time.DateTime

import scalaz.concurrent.Task

import HelperCodecs._

object PushApi {

  val client = PooledHttp1Client()

  def escape(value: String): String = URLEncoder.encode(value, "utf-8").replaceAll("\\+", "%20")

  def send(host: String, body: PushObject, xEmbarcaderoApplicationId: String, xEmbarcaderoAppSecret: String, xEmbarcaderoMasterSecret: String): Task[Unit] = {
    val path = "/push"
    
    val httpMethod = Method.POST
    val contentType = `Content-Type`(MediaType.`application/json`)
    val headers = Headers(
      Header("X-Embarcadero-Application-Id", xEmbarcaderoApplicationId), Header("X-Embarcadero-App-Secret", xEmbarcaderoAppSecret), Header("X-Embarcadero-Master-Secret", xEmbarcaderoMasterSecret))
    val queryParams = Query(
      )

    for {
      uri           <- Task.fromDisjunction(Uri.fromString(host + path))
      uriWithParams =  uri.copy(query = queryParams)
      req           =  Request(method = httpMethod, uri = uriWithParams, headers = headers.put(contentType)).withBody(body)
      resp          <- client.fetch[Unit](req)(_ => Task.now(()))

    } yield resp
  }
  
}

class HttpServicePushApi(service: HttpService) {
  val client = Client.fromHttpService(service)

  def escape(value: String): String = URLEncoder.encode(value, "utf-8").replaceAll("\\+", "%20")

  def send(body: PushObject, xEmbarcaderoApplicationId: String, xEmbarcaderoAppSecret: String, xEmbarcaderoMasterSecret: String): Task[Unit] = {
    val path = "/push"
    
    val httpMethod = Method.POST
    val contentType = `Content-Type`(MediaType.`application/json`)
    val headers = Headers(
      Header("X-Embarcadero-Application-Id", xEmbarcaderoApplicationId), Header("X-Embarcadero-App-Secret", xEmbarcaderoAppSecret), Header("X-Embarcadero-Master-Secret", xEmbarcaderoMasterSecret))
    val queryParams = Query(
      )

    for {
      uri           <- Task.fromDisjunction(Uri.fromString(path))
      uriWithParams =  uri.copy(query = queryParams)
      req           =  Request(method = httpMethod, uri = uriWithParams, headers = headers.put(contentType)).withBody(body)
      resp          <- client.fetch[Unit](req)(_ => Task.now(()))

    } yield resp
  }
  
}
