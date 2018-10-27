-- MySQL dump 10.13  Distrib 5.7.20, for osx10.13 (x86_64)
--
-- Host: localhost    Database: rotten_tomatoes
-- ------------------------------------------------------
-- Server version	5.7.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `celebToMovie`
--

DROP TABLE IF EXISTS `celebToMovie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `celebToMovie` (
  `celebId` int(11) NOT NULL,
  `movieId` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `celebToMovie`
--

LOCK TABLES `celebToMovie` WRITE;
/*!40000 ALTER TABLE `celebToMovie` DISABLE KEYS */;
INSERT INTO `celebToMovie` VALUES (1,'TWFtbWEgTWlhISBIZXJlIFdlIEdvIEFnYWlu'),(1,'VGhlIFBvc3Q='),(1,'Tm90ZXMgRnJvbSBUaGUgRmllbGQ='),(1,'TWFyayBGZWx0OiBUaGUgTWFuIFdobyBCcm91Z2h0IERvd24gdGhlIFdoaXRlIEhvdXNl'),(1,'Q2FsaWZvcm5pYSBUeXBld3JpdGVy'),(1,'VGhlIENpcmNsZQ=='),(1,'SW5mZXJubw=='),(1,'SXRoYWNh'),(1,'U3VsbHk='),(1,'RGVmeWluZyB0aGUgTmF6aXM6IFRoZSBTaGFycHMnIFdhcg=='),(1,'QSBIb2xvZ3JhbSBmb3IgdGhlIEtpbmc='),(1,'TXkgQmlnIEZhdCBHcmVlayBXZWRkaW5nIDI='),(1,'RXZlcnl0aGluZyBJcyBDb3B5'),(1,'QnJpZGdlIG9mIFNwaWVz'),(1,'VG95IFN0b3J5IFRoYXQgVGltZSBGb3Jnb3Q='),(1,'TWlzZXJ5IExvdmVzIENvbWVkeQ=='),(1,'U2F2aW5nIE1yLiBCYW5rcw=='),(1,'VG95IFN0b3J5IG9mIFRlcnJvciE='),(1,'Q2FwdGFpbiBQaGlsbGlwcw=='),(1,'UGFya2xhbmQ='),(1,'Q2xvdWQgQXRsYXM='),(1,'RXh0cmVtZWx5IExvdWQgJiBJbmNyZWRpYmx5IENsb3Nl'),(1,'R2FtZSBDaGFuZ2U='),(1,'TGFycnkgQ3Jvd25l'),(1,'VG95IFN0b3J5IDM='),(1,'V2hlcmUgdGhlIFdpbGQgVGhpbmdzIEFyZQ=='),(1,'TXkgTGlmZSBpbiBSdWlucw=='),(1,'QW5nZWxzICYgRGVtb25z'),(1,'VGhlIEdyZWF0IEJ1Y2sgSG93YXJk'),(1,'Q2l0eSBvZiBFbWJlcg=='),(1,'TWFtbWEgTWlhIQ=='),(1,'Q2hhcmxpZSBXaWxzb24ncyBXYXI='),(1,'VGhlIFBpeGFyIFN0b3J5'),(1,'VGhlIFNpbXBzb25zIE1vdmll'),(1,'RXZhbiBBbG1pZ2h0eQ=='),(1,'VGhlIEFudCBCdWxseQ=='),(1,'V2hvIEtpbGxlZCB0aGUgRWxlY3RyaWMgQ2FyPw=='),(1,'Q2Fycw=='),(1,'VGhlIERhIFZpbmNpIENvZGU='),(1,'U3RhcnRlciBmb3IgMTA='),(1,'TmVpbCBZb3VuZzogSGVhcnQgb2YgR29sZA=='),(1,'TWFnbmlmaWNlbnQgRGVzb2xhdGlvbjogV2Fsa2luZyBvbiB0aGUgTW9vbiAzRA=='),(1,'VGhlIFBvbGFyIEV4cHJlc3M='),(1,'VGhlIFRlcm1pbmFs'),(1,'VGhlIExhZHlraWxsZXJz'),(1,'R3JlYXQgUGVyZm9ybWFuY2Vz'),(1,'Q2F0Y2ggTWUgSWYgWW91IENhbg=='),(1,'Um9hZCB0byBQZXJkaXRpb24='),(1,'TXkgQmlnIEZhdCBHcmVlayBXZWRkaW5n'),(1,'Q2FzdCBBd2F5'),(1,'VGhlIEdyZWVuIE1pbGU='),(1,'VG95IFN0b3J5IDI='),(1,'UmV0dXJuIFdpdGggSG9ub3I='),(1,'WW91J3ZlIEdvdCBNYWls'),(1,'U2F2aW5nIFByaXZhdGUgUnlhbg=='),(1,'VGhhdCBUaGluZyBZb3UgRG8h'),(1,'VGhlIENlbGx1bG9pZCBDbG9zZXQ='),(1,'VG95IFN0b3J5'),(1,'QXBvbGxvIDEz'),(1,'Rm9ycmVzdCBHdW1w'),(1,'UGhpbGFkZWxwaGlh'),(1,'U2xlZXBsZXNzIGluIFNlYXR0bGU='),(1,'QSBMZWFndWUgb2YgVGhlaXIgT3du'),(1,'UmFkaW8gRmx5ZXI='),(1,'VGhlIEJvbmZpcmUgb2YgdGhlIFZhbml0aWVz'),(1,'Sm9lIFZlcnN1cyB0aGUgVm9sY2Fubw=='),(1,'VHVybmVyIGFuZCBIb29jaA=='),(1,'VGhlICdCdXJicw=='),(1,'UHVuY2hsaW5l'),(1,'Qmln'),(1,'RHJhZ25ldA=='),(1,'Tm90aGluZyBpbiBDb21tb24='),(1,'VGhlIE1vbmV5IFBpdA=='),(1,'Vm9sdW50ZWVycw=='),(1,'VGhlIE1hbiB3aXRoIE9uZSBSZWQgU2hvZQ=='),(1,'QmFjaGVsb3IgUGFydHk='),(1,'U3BsYXNo'),(1,'SGUgS25vd3MgWW91J3JlIEFsb25l'),(2,'VGhlIEZhdm91cml0ZQ=='),(2,'OTB0aCBBY2FkZW15IEF3YXJkcw=='),(2,'QmF0dGxlIG9mIHRoZSBTZXhlcw=='),(2,'TGEgTGEgTGFuZA=='),(2,'SXJyYXRpb25hbCBNYW4='),(2,'QWxvaGE='),(2,'QmlyZG1hbg=='),(2,'TWFnaWMgaW4gdGhlIE1vb25saWdodA=='),(2,'VGhlIEFtYXppbmcgU3BpZGVyLU1hbiAy'),(2,'VGhlIENyb29kcw=='),(2,'TW92aWUgNDM='),(2,'R2FuZ3N0ZXIgU3F1YWQ='),(2,'VGhlIEFtYXppbmcgU3BpZGVyLU1hbg=='),(2,'VGhlIEhlbHA='),(2,'Q3JhenksIFN0dXBpZCwgTG92ZS4='),(2,'RnJpZW5kcyBXaXRoIEJlbmVmaXRz'),(2,'RWFzeSBB'),(2,'TWFybWFkdWtl'),(2,'UGFwZXIgTWFu'),(2,'Wm9tYmllbGFuZA=='),(2,'R2hvc3RzIG9mIEdpcmxmcmllbmRzIFBhc3Q='),(2,'VGhlIEhvdXNlIEJ1bm55'),(2,'VGhlIFJvY2tlcg=='),(2,'U3VwZXJiYWQ='),(5,'TGl2ZSBCeSBOaWdodA=='),(5,'QmVmb3JlIHRoZSBGbG9vZA=='),(5,'VGhlIEl2b3J5IEdhbWU='),(5,'VGhlIFJldmVuYW50'),(5,'VmlydW5nYQ=='),(5,'VGhlIFdvbGYgb2YgV2FsbCBTdHJlZXQ='),(5,'T3V0IG9mIHRoZSBGdXJuYWNl'),(5,'UnVubmVyIFJ1bm5lcg=='),(5,'VGhlIEdyZWF0IEdhdHNieQ=='),(5,'RGphbmdvIFVuY2hhaW5lZA=='),(5,'Si4gRWRnYXI='),(5,'VGhlIElkZXMgb2YgTWFyY2g='),(5,'UmVkIFJpZGluZyBIb29k'),(5,'SW5jZXB0aW9u'),(5,'SHViYmxlIDNE'),(5,'U2h1dHRlciBJc2xhbmQ='),(5,'T3JwaGFu'),(5,'UmV2b2x1dGlvbmFyeSBSb2Fk'),(5,'Qm9keSBvZiBMaWVz'),(5,'VGhlIDExdGggSG91cg=='),(5,'Qmxvb2QgRGlhbW9uZA=='),(5,'VGhlIERlcGFydGVk'),(5,'VGhlIEFzc2Fzc2luYXRpb24gb2YgUmljaGFyZCBOaXhvbg=='),(5,'VGhlIEF2aWF0b3I='),(5,'Q2F0Y2ggTWUgSWYgWW91IENhbg=='),(5,'R2FuZ3Mgb2YgTmV3IFlvcms='),(5,'VGhlIEJlYWNo'),(5,'Q2VsZWJyaXR5'),(5,'VGhlIE1hbiBpbiB0aGUgSXJvbiBNYXNr'),(5,'VGl0YW5pYw=='),(5,'TWFydmluJ3MgUm9vbQ=='),(5,'Um9tZW8gKyBKdWxpZXQ='),(5,'VG90YWwgRWNsaXBzZQ=='),(5,'VGhlIEJhc2tldGJhbGwgRGlhcmllcw=='),(5,'VGhlIFF1aWNrIGFuZCB0aGUgRGVhZA=='),(5,'V2hhdCdzIEVhdGluZyBHaWxiZXJ0IEdyYXBl'),(5,'VGhpcyBCb3kncyBMaWZl'),(5,'UG9pc29uIEl2eQ=='),(5,'Q3JpdHRlcnMgMw=='),(6,'U29ycnkgdG8gQm90aGVyIFlvdQ=='),(6,'RnVybG91Z2g='),(6,'QW5uaWhpbGF0aW9u'),(6,'TGl0dGxlIFdvb2Rz'),(6,'VGhvcjogUmFnbmFyb2s='),(6,'V2FyIG9uIEV2ZXJ5b25l'),(6,'Q3JlZWQ='),(6,'U2VsbWE='),(6,'RGVhciBXaGl0ZSBQZW9wbGU='),(6,'Rm9yIENvbG9yZWQgR2lybHM='),(6,'TWFrZSBJdCBIYXBwZW4='),(6,'V2hlbiBhIFN0cmFuZ2VyIENhbGxz');
/*!40000 ALTER TABLE `celebToMovie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `celebrity`
--

DROP TABLE IF EXISTS `celebrity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `celebrity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `celebrity`
--

LOCK TABLES `celebrity` WRITE;
/*!40000 ALTER TABLE `celebrity` DISABLE KEYS */;
INSERT INTO `celebrity` VALUES (1,'tom hanks'),(2,'Emma Stone'),(3,'Leonardo Di Caprio'),(4,'Leonardo Di Caprio'),(5,'Leonardo Di Caprio'),(6,'Tessa Thompson');
/*!40000 ALTER TABLE `celebrity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movie` (
  `name` char(255) NOT NULL,
  `rating` int(4) DEFAULT NULL,
  `year` int(4) DEFAULT NULL,
  `boxOffice` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES ('OTB0aCBBY2FkZW15IEF3YXJkcw==',45,2018,'0'),('Q2F0Y2ggTWUgSWYgWW91IENhbg==',96,2002,'$164.4M'),('Q2FsaWZvcm5pYSBUeXBld3JpdGVy',100,2017,'0'),('Q2FwdGFpbiBQaGlsbGlwcw==',93,2013,'$107.2M'),('Q2Fycw==',74,2006,'$244.1M'),('Q2FzdCBBd2F5',90,2000,'0'),('Q2hhcmxpZSBXaWxzb24ncyBXYXI=',82,2007,'$66.7M'),('Q2l0eSBvZiBFbWJlcg==',54,2008,'$7.8M'),('Q2VsZWJyaXR5',41,1998,'0'),('Q2xvdWQgQXRsYXM=',66,2012,'$22.1M'),('Q3JhenksIFN0dXBpZCwgTG92ZS4=',78,2011,'$83.3M'),('Q3JlZWQ=',95,2015,'$81.2M'),('Q3JpdHRlcnMgMw==',0,1991,'0'),('Qm9keSBvZiBMaWVz',55,2008,'$39.4M'),('QmF0dGxlIG9mIHRoZSBTZXhlcw==',85,2017,'$12.6M'),('QmFjaGVsb3IgUGFydHk=',54,1984,'0'),('Qmln',97,1988,'0'),('QmlyZG1hbg==',91,2014,'0'),('QmVmb3JlIHRoZSBGbG9vZA==',71,2016,'0'),('Qmxvb2QgRGlhbW9uZA==',62,2006,'$57.4M'),('QnJpZGdlIG9mIFNwaWVz',91,2015,'0'),('QSBIb2xvZ3JhbSBmb3IgdGhlIEtpbmc=',73,2016,'0'),('QSBMZWFndWUgb2YgVGhlaXIgT3du',78,1992,'0'),('QW5nZWxzICYgRGVtb25z',37,2009,'$133.4M'),('QW5uaWhpbGF0aW9u',87,2018,'$20.7M'),('QWxvaGE=',20,2015,'$15.7M'),('QXBvbGxvIDEz',95,1995,'0'),('R2FtZSBDaGFuZ2U=',67,2012,'0'),('R2FuZ3Mgb2YgTmV3IFlvcms=',74,2002,'$77.7M'),('R2FuZ3N0ZXIgU3F1YWQ=',32,2013,'$46M'),('R2hvc3RzIG9mIEdpcmxmcmllbmRzIFBhc3Q=',27,2009,'$55.2M'),('R3JlYXQgUGVyZm9ybWFuY2Vz',95,2003,'$70.5k'),('RGphbmdvIFVuY2hhaW5lZA==',87,2012,'$162.9M'),('RGVhciBXaGl0ZSBQZW9wbGU=',91,2014,'0'),('RGVmeWluZyB0aGUgTmF6aXM6IFRoZSBTaGFycHMnIFdhcg==',100,2016,'0'),('RHJhZ25ldA==',45,1987,'0'),('Rm9ycmVzdCBHdW1w',72,1994,'$330.1M'),('Rm9yIENvbG9yZWQgR2lybHM=',32,2010,'$37.8M'),('RnJpZW5kcyBXaXRoIEJlbmVmaXRz',69,2011,'$55.9M'),('RnVybG91Z2g=',20,2018,'0'),('RWFzeSBB',85,2010,'$58.5M'),('RXh0cmVtZWx5IExvdWQgJiBJbmNyZWRpYmx5IENsb3Nl',46,2012,'$31.9M'),('RXZhbiBBbG1pZ2h0eQ==',23,2007,'$100.3M'),('RXZlcnl0aGluZyBJcyBDb3B5',100,2016,'0'),('SGUgS25vd3MgWW91J3JlIEFsb25l',25,1980,'0'),('SHViYmxlIDNE',87,2010,'$51.8M'),('Si4gRWRnYXI=',43,2011,'$37.4M'),('Sm9lIFZlcnN1cyB0aGUgVm9sY2Fubw==',62,1990,'0'),('SW5jZXB0aW9u',86,2010,'$292.6M'),('SW5mZXJubw==',22,2016,'$34.4M'),('SXJyYXRpb25hbCBNYW4=',46,2015,'0'),('SXRoYWNh',13,2016,'0'),('T3JwaGFu',55,2009,'$41.5M'),('T3V0IG9mIHRoZSBGdXJuYWNl',54,2013,'$8.4M'),('TGEgTGEgTGFuZA==',91,2016,'$151.1M'),('TGFycnkgQ3Jvd25l',36,2011,'$35.6M'),('TGl0dGxlIFdvb2Rz',100,2018,'0'),('TGl2ZSBCeSBOaWdodA==',35,2017,'$10.4M'),('Tm90aGluZyBpbiBDb21tb24=',57,1986,'0'),('Tm90ZXMgRnJvbSBUaGUgRmllbGQ=',100,2018,'0'),('TmVpbCBZb3VuZzogSGVhcnQgb2YgR29sZA==',90,2006,'0'),('TW92aWUgNDM=',4,2013,'$8.8M'),('TWFnaWMgaW4gdGhlIE1vb25saWdodA==',51,2014,'0'),('TWFnbmlmaWNlbnQgRGVzb2xhdGlvbjogV2Fsa2luZyBvbiB0aGUgTW9vbiAzRA==',88,2005,'$32.6M'),('TWFrZSBJdCBIYXBwZW4=',22,2008,'0'),('TWFtbWEgTWlhIQ==',55,2008,'$143.8M'),('TWFtbWEgTWlhISBIZXJlIFdlIEdvIEFnYWlu',80,2018,'0'),('TWFyayBGZWx0OiBUaGUgTWFuIFdobyBCcm91Z2h0IERvd24gdGhlIFdoaXRlIEhvdXNl',36,2017,'$0.8M'),('TWFybWFkdWtl',9,2010,'$33.7M'),('TWFydmluJ3MgUm9vbQ==',80,1996,'0'),('TWlzZXJ5IExvdmVzIENvbWVkeQ==',36,2014,'$5.8k'),('TXkgQmlnIEZhdCBHcmVlayBXZWRkaW5n',76,2002,'$241.3M'),('TXkgQmlnIEZhdCBHcmVlayBXZWRkaW5nIDI=',28,2016,'$52.1M'),('TXkgTGlmZSBpbiBSdWlucw==',9,2009,'$8.5M'),('U29ycnkgdG8gQm90aGVyIFlvdQ==',94,2018,'0'),('U2F2aW5nIE1yLiBCYW5rcw==',79,2013,'$53.3M'),('U2F2aW5nIFByaXZhdGUgUnlhbg==',93,1998,'0'),('U2h1dHRlciBJc2xhbmQ=',68,2010,'$125.1M'),('U2VsbWE=',99,2015,'0'),('U2xlZXBsZXNzIGluIFNlYXR0bGU=',72,1993,'0'),('U3BsYXNo',90,1984,'0'),('U3RhcnRlciBmb3IgMTA=',90,2006,'$0.2M'),('U3VsbHk=',86,2016,'$125.1M'),('U3VwZXJiYWQ=',87,2007,'$121.5M'),('UG9pc29uIEl2eQ==',37,1992,'0'),('UGFwZXIgTWFu',32,2010,'0'),('UGFya2xhbmQ=',50,2013,'$0.7M'),('UGhpbGFkZWxwaGlh',79,1993,'0'),('UHVuY2hsaW5l',56,1988,'0'),('Um9hZCB0byBQZXJkaXRpb24=',81,2002,'$104.1M'),('Um9tZW8gKyBKdWxpZXQ=',71,1996,'0'),('UmFkaW8gRmx5ZXI=',32,1992,'0'),('UmV0dXJuIFdpdGggSG9ub3I=',100,1999,'0'),('UmV2b2x1dGlvbmFyeSBSb2Fk',67,2008,'$22.9M'),('UmVkIFJpZGluZyBIb29k',10,2011,'$37.2M'),('UnVubmVyIFJ1bm5lcg==',8,2013,'$19.4M'),('V2FyIG9uIEV2ZXJ5b25l',58,2017,'$0.2M'),('V2hhdCdzIEVhdGluZyBHaWxiZXJ0IEdyYXBl',89,1993,'0'),('V2hlbiBhIFN0cmFuZ2VyIENhbGxz',9,2006,'$47.9M'),('V2hlcmUgdGhlIFdpbGQgVGhpbmdzIEFyZQ==',73,2009,'$77.3M'),('V2hvIEtpbGxlZCB0aGUgRWxlY3RyaWMgQ2FyPw==',89,2006,'$1.4M'),('VG90YWwgRWNsaXBzZQ==',25,1995,'0'),('VG95IFN0b3J5',100,1995,'0'),('VG95IFN0b3J5IDI=',100,1999,'0'),('VG95IFN0b3J5IDM=',99,2010,'$415M'),('VG95IFN0b3J5IFRoYXQgVGltZSBGb3Jnb3Q=',100,2014,'0'),('VG95IFN0b3J5IG9mIFRlcnJvciE=',93,2013,'0'),('VGhhdCBUaGluZyBZb3UgRG8h',93,1996,'0'),('VGhlICdCdXJicw==',50,1989,'0'),('VGhlIDExdGggSG91cg==',67,2007,'$0.6M'),('VGhlIE1hbiB3aXRoIE9uZSBSZWQgU2hvZQ==',47,1985,'0'),('VGhlIE1hbiBpbiB0aGUgSXJvbiBNYXNr',34,1998,'0'),('VGhlIE1vbmV5IFBpdA==',47,1986,'0'),('VGhlIEdyZWF0IEdhdHNieQ==',49,2013,'$144.9M'),('VGhlIEdyZWF0IEJ1Y2sgSG93YXJk',72,2009,'$0.7M'),('VGhlIEdyZWVuIE1pbGU=',80,1999,'0'),('VGhlIEF2aWF0b3I=',87,2004,'$102.6M'),('VGhlIEFtYXppbmcgU3BpZGVyLU1hbg==',72,2012,'$262.1M'),('VGhlIEFtYXppbmcgU3BpZGVyLU1hbiAy',52,2014,'$183.3M'),('VGhlIEFudCBCdWxseQ==',63,2006,'$28.1M'),('VGhlIEFzc2Fzc2luYXRpb24gb2YgUmljaGFyZCBOaXhvbg==',67,2004,'$0.6M'),('VGhlIEhlbHA=',75,2011,'$169.8M'),('VGhlIEhvdXNlIEJ1bm55',43,2008,'$48.3M'),('VGhlIEJhc2tldGJhbGwgRGlhcmllcw==',46,1995,'0'),('VGhlIEJlYWNo',20,2000,'0'),('VGhlIEJvbmZpcmUgb2YgdGhlIFZhbml0aWVz',16,1990,'0'),('VGhlIEl2b3J5IEdhbWU=',80,2016,'0'),('VGhlIElkZXMgb2YgTWFyY2g=',83,2011,'$41M'),('VGhlIENlbGx1bG9pZCBDbG9zZXQ=',96,1996,'0'),('VGhlIENpcmNsZQ==',16,2017,'$20.5M'),('VGhlIENyb29kcw==',71,2013,'$187.2M'),('VGhlIERhIFZpbmNpIENvZGU=',25,2006,'$217.6M'),('VGhlIERlcGFydGVk',90,2006,'$132.3M'),('VGhlIExhZHlraWxsZXJz',55,2004,'0'),('VGhlIEZhdm91cml0ZQ==',95,2018,'0'),('VGhlIFBpeGFyIFN0b3J5',86,2007,'0'),('VGhlIFBvbGFyIEV4cHJlc3M=',55,2004,'$162.8M'),('VGhlIFBvc3Q=',87,2018,'$80.4M'),('VGhlIFdvbGYgb2YgV2FsbCBTdHJlZXQ=',78,2013,'$91.4M'),('VGhlIFF1aWNrIGFuZCB0aGUgRGVhZA==',56,1995,'0'),('VGhlIFJldmVuYW50',79,2015,'0'),('VGhlIFJvY2tlcg==',41,2008,'$6.4M'),('VGhlIFNpbXBzb25zIE1vdmll',88,2007,'$183.2M'),('VGhlIFRlcm1pbmFs',61,2004,'$77.1M'),('VGhpcyBCb3kncyBMaWZl',76,1993,'0'),('VGhvcjogUmFnbmFyb2s=',92,2017,'$315M'),('VGl0YW5pYw==',89,1997,'0'),('VHVybmVyIGFuZCBIb29jaA==',54,1989,'0'),('Vm9sdW50ZWVycw==',58,1985,'0'),('VmlydW5nYQ==',100,2014,'0'),('Wm9tYmllbGFuZA==',90,2009,'$75.6M'),('WW91J3ZlIEdvdCBNYWls',69,1998,'0');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Actor'),(2,'Producer'),(3,'Screenwriter'),(4,'Director');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolesToCelebToMovie`
--

DROP TABLE IF EXISTS `rolesToCelebToMovie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rolesToCelebToMovie` (
  `celebId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL,
  `movieId` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolesToCelebToMovie`
--

LOCK TABLES `rolesToCelebToMovie` WRITE;
/*!40000 ALTER TABLE `rolesToCelebToMovie` DISABLE KEYS */;
INSERT INTO `rolesToCelebToMovie` VALUES (1,1,'VG95IFN0b3J5IDQ='),(1,2,'TWFtbWEgTWlhISBIZXJlIFdlIEdvIEFnYWlu'),(1,1,'VGhlIFBvc3Q='),(1,1,'VGhlIE1heW8gQ2xpbmljOiBGYWl0aCAtIEhvcGUgLSBTY2llbmNl'),(1,2,'Tm90ZXMgRnJvbSBUaGUgRmllbGQ='),(1,2,'TWFyayBGZWx0OiBUaGUgTWFuIFdobyBCcm91Z2h0IERvd24gdGhlIFdoaXRlIEhvdXNl'),(1,1,'Q2FsaWZvcm5pYSBUeXBld3JpdGVy'),(1,2,'VGhlIENpcmNsZQ=='),(1,1,'VGhlIENpcmNsZQ=='),(1,1,'SW5mZXJubw=='),(1,1,'SXRoYWNh'),(1,2,'SXRoYWNh'),(1,1,'U3VsbHk='),(1,1,'RGVmeWluZyB0aGUgTmF6aXM6IFRoZSBTaGFycHMnIFdhcg=='),(1,1,'QSBIb2xvZ3JhbSBmb3IgdGhlIEtpbmc='),(1,2,'QSBIb2xvZ3JhbSBmb3IgdGhlIEtpbmc='),(1,2,'TXkgQmlnIEZhdCBHcmVlayBXZWRkaW5nIDI='),(1,1,'RXZlcnl0aGluZyBJcyBDb3B5'),(1,1,'QnJpZGdlIG9mIFNwaWVz'),(1,1,'VG95IFN0b3J5IFRoYXQgVGltZSBGb3Jnb3Q='),(1,1,'TWlzZXJ5IExvdmVzIENvbWVkeQ=='),(1,1,'VGNtIFByZXNlbnRzIEFuZCBUaGUgT3NjYXIgKFIpIEdvZXMgVG8uLi4='),(1,1,'R2xhZCBBbGwgT3ZlcjogVGhlIERhdmUgQ2xhcmsgRml2ZSBhbmQgQmV5b25k'),(1,1,'U2F2aW5nIE1yLiBCYW5rcw=='),(1,1,'VG95IFN0b3J5IG9mIFRlcnJvciE='),(1,1,'Q2FwdGFpbiBQaGlsbGlwcw=='),(1,2,'UGFya2xhbmQ='),(1,2,'QW4gQXJ0aWNsZSBPZiBIb3Bl'),(1,1,'S2lsbGluZyBMaW5jb2xu'),(1,1,'Q2xvdWQgQXRsYXM='),(1,1,'RXh0cmVtZWx5IExvdWQgJiBJbmNyZWRpYmx5IENsb3Nl'),(1,1,'UGFzc3BvcnQgVG8gVGhlIFVuaXZlcnNl'),(1,2,'R2FtZSBDaGFuZ2U='),(1,1,'U21hbGwgRnJ5'),(1,2,'TGFycnkgQ3Jvd25l'),(1,3,'TGFycnkgQ3Jvd25l'),(1,4,'TGFycnkgQ3Jvd25l'),(1,1,'TGFycnkgQ3Jvd25l'),(1,1,'SGF3YWlpYW4gVmFjYXRpb24='),(1,1,'VG95IFN0b3J5IDM='),(1,1,'Um9jayBhbmQgUm9sbCBIYWxsIG9mIEZhbWUgKyBNdXNldW06IExpdmUgLSBMZWdlbmRz'),(1,2,'V2hlcmUgdGhlIFdpbGQgVGhpbmdzIEFyZQ=='),(1,2,'TXkgTGlmZSBpbiBSdWlucw=='),(1,1,'QW5nZWxzICYgRGVtb25z'),(1,2,'VGhlIEdyZWF0IEJ1Y2sgSG93YXJk'),(1,1,'VGhlIEdyZWF0IEJ1Y2sgSG93YXJk'),(1,2,'Q2l0eSBvZiBFbWJlcg=='),(1,2,'TWFtbWEgTWlhIQ=='),(1,1,'Q2hhcmxpZSBXaWxzb24ncyBXYXI='),(1,2,'Q2hhcmxpZSBXaWxzb24ncyBXYXI='),(1,1,'VGhlIFBpeGFyIFN0b3J5'),(1,1,'VGhlIFNpbXBzb25zIE1vdmll'),(1,2,'RXZhbiBBbG1pZ2h0eQ=='),(1,2,'VGhlIEFudCBCdWxseQ=='),(1,1,'V2hvIEtpbGxlZCB0aGUgRWxlY3RyaWMgQ2FyPw=='),(1,1,'Q2Fycw=='),(1,1,'VGhlIERhIFZpbmNpIENvZGU='),(1,2,'U3RhcnRlciBmb3IgMTA='),(1,2,'TmVpbCBZb3VuZzogSGVhcnQgb2YgR29sZA=='),(1,1,'TWFnbmlmaWNlbnQgRGVzb2xhdGlvbjogV2Fsa2luZyBvbiB0aGUgTW9vbiAzRA=='),(1,1,'U2F0dXJkYXkgTmlnaHQgTGl2ZSAtIFRoZSBCZXN0IG9mIFRvbSBIYW5rcw=='),(1,2,'VGhlIFBvbGFyIEV4cHJlc3M='),(1,1,'VGhlIFBvbGFyIEV4cHJlc3M='),(1,1,'VGhlIFJ1dGxlcyAyLS0tQ2FuJ3QgQnV5IE1lIEx1bmNo'),(1,1,'VGhlIFRlcm1pbmFs'),(1,1,'VGhlIExhZHlraWxsZXJz'),(1,1,'RWx2aXMgSGFzIExlZnQgdGhlIEJ1aWxkaW5n'),(1,1,'TGF0ZSBOaWdodCBXaXRoIENvbmFuIE8nQnJpZW4gLSAxMHRoIEFubml2ZXJzYXJ5IFNwZWNpYWw='),(1,1,'SG9yYXRpbydzIERyaXZlOiBBbWVyaWNhJ3MgRmlyc3QgUm9hZCBUcmlw'),(1,1,'R3JlYXQgUGVyZm9ybWFuY2Vz'),(1,1,'Q29uY2VydCBmb3IgR2Vvcmdl'),(1,1,'Q2F0Y2ggTWUgSWYgWW91IENhbg=='),(1,1,'Um9hZCB0byBQZXJkaXRpb24='),(1,2,'TXkgQmlnIEZhdCBHcmVlayBXZWRkaW5n'),(1,1,'RmlnaHRpbmcgZm9yIEZyZWVkb206IFJldm9sdXRpb24gJiBDaXZpbCBXYXI='),(1,1,'QW1lcmljYTogQSBUcmlidXRlIHRvIEhlcm9lcw=='),(1,1,'Sm9lIFZlcnN1cyBUaGUgVm9sY2Fubw=='),(1,2,'Q2FzdCBBd2F5'),(1,1,'Q2FzdCBBd2F5'),(1,1,'VGhlIEdyZWVuIE1pbGU='),(1,1,'VG95IFN0b3J5IDI='),(1,1,'UmV0dXJuIFdpdGggSG9ub3I='),(1,1,'WW91J3ZlIEdvdCBNYWls'),(1,1,'U2F2aW5nIFByaXZhdGUgUnlhbg=='),(1,1,'SW50byB0aGUgQnJlYWNoOiAnU2F2aW5nIFByaXZhdGUgUnlhbic='),(1,1,'VGhlIERpcmVjdG9ycw=='),(1,3,'VGhhdCBUaGluZyBZb3UgRG8h'),(1,1,'VGhhdCBUaGluZyBZb3UgRG8h'),(1,4,'VGhhdCBUaGluZyBZb3UgRG8h'),(1,1,'VGhlIENlbGx1bG9pZCBDbG9zZXQ='),(1,1,'VGhlIFVuaXZlcnNhbCBTdG9yeQ=='),(1,1,'VG95IFN0b3J5'),(1,1,'QXBvbGxvIDEz'),(1,1,'Rm9ycmVzdCBHdW1w'),(1,1,'VGhyb3VnaCB0aGUgRXllcyBvZiBGb3JyZXN0IEd1bXA='),(1,1,'UGhpbGFkZWxwaGlh'),(1,1,'U2xlZXBsZXNzIGluIFNlYXR0bGU='),(1,1,'QSBMZWFndWUgb2YgVGhlaXIgT3du'),(1,1,'UmFkaW8gRmx5ZXI='),(1,1,'VGhlIEJvbmZpcmUgb2YgdGhlIFZhbml0aWVz'),(1,1,'Sm9lIFZlcnN1cyB0aGUgVm9sY2Fubw=='),(1,1,'VHVybmVyIGFuZCBIb29jaA=='),(1,1,'VGhlICdCdXJicw=='),(1,1,'UHVuY2hsaW5l'),(1,1,'Qmln'),(1,1,'RHJhZ25ldA=='),(1,1,'Tm90aGluZyBpbiBDb21tb24='),(1,1,'VGhlIE1vbmV5IFBpdA=='),(1,1,'RXZlcnl0aW1lIFdlIFNheSBHb29kYnll'),(1,1,'RXZlcnkgVGltZSBXZSBTYXkgR29vZGJ5ZQ=='),(1,1,'Vm9sdW50ZWVycw=='),(1,1,'VGhlIE1hbiB3aXRoIE9uZSBSZWQgU2hvZQ=='),(1,1,'QmFjaGVsb3IgUGFydHk='),(1,1,'VGhlIERvbGxtYWtlcg=='),(1,1,'U3BsYXNo'),(1,1,'TWF6ZXMgYW5kIE1vbnN0ZXJz'),(1,1,'SGUgS25vd3MgWW91J3JlIEFsb25l'),(2,1,'VGhlIENyb29kcyAy'),(2,1,'VGhlIEZhdm91cml0ZQ=='),(2,1,'OTB0aCBBY2FkZW15IEF3YXJkcw=='),(2,1,'QmF0dGxlIG9mIHRoZSBTZXhlcw=='),(2,1,'TGEgTGEgTGFuZCBTaW5nIEFsb25n'),(2,1,'V29tZW4gaW4gQnVzaW5lc3M='),(2,1,'TGEgTGEgTGFuZA=='),(2,1,''),(2,1,'SXJyYXRpb25hbCBNYW4='),(2,1,'QWxvaGE='),(2,1,'QmlyZG1hbg=='),(2,1,'TWFnaWMgaW4gdGhlIE1vb25saWdodA=='),(2,1,'VGhlIEFtYXppbmcgU3BpZGVyLU1hbiAy'),(2,1,'VGhlIENyb29kcw=='),(2,1,'TW92aWUgNDM='),(2,1,'R2FuZ3N0ZXIgU3F1YWQ='),(2,1,'VGhlIEFtYXppbmcgU3BpZGVyLU1hbg=='),(2,1,'VGhlIEhlbHA='),(2,1,'Q3JhenksIFN0dXBpZCwgTG92ZS4='),(2,1,'RnJpZW5kcyBXaXRoIEJlbmVmaXRz'),(2,1,'RWFzeSBB'),(2,1,'TWFybWFkdWtl'),(2,1,'UGFwZXIgTWFu'),(2,1,'Wm9tYmllbGFuZA=='),(2,1,'R2hvc3RzIG9mIEdpcmxmcmllbmRzIFBhc3Q='),(2,1,'VGhlIEhvdXNlIEJ1bm55'),(2,1,'VGhlIFJvY2tlcg=='),(2,1,'U3VwZXJiYWQ='),(5,1,'T25jZSBVcG9uIGEgVGltZSBJbiBIb2xseXdvb2Q='),(5,2,'RGVsaXJpdW0='),(5,1,'VGl0YW5pYyBpbiBEb2xieSBWaXNpb24='),(5,2,'TGl2ZSBCeSBOaWdodA=='),(5,2,'RGV2aWwgaW4gdGhlIFdoaXRlIENpdHk='),(5,1,'RGV2aWwgaW4gdGhlIFdoaXRlIENpdHk='),(5,2,'VGhlIERlZXAgQmx1ZSBHb29kYnll'),(5,1,'QmVmb3JlIHRoZSBGbG9vZA=='),(5,2,'QmVmb3JlIHRoZSBGbG9vZA=='),(5,2,'QmVmb3JlIHRoZSBGbG9vZA=='),(5,2,'VGhlIEJhbGxhZCBvZiBSaWNoYXJkIEpld2VsbA=='),(5,1,'VGhlIEJhbGxhZCBvZiBSaWNoYXJkIEpld2VsbA=='),(5,2,'VGhlIEl2b3J5IEdhbWU='),(5,2,'SGFya2Vy'),(5,1,'VGhlIFJldmVuYW50'),(5,1,'VGhlIEF1ZGl0aW9u'),(5,2,'VHdpbGlnaHQgWm9uZTogVGhlIE1vdmll'),(5,2,'VmlydW5nYQ=='),(5,1,'Q2FyYm9u'),(5,2,'VGhlIFdvbGYgb2YgV2FsbCBTdHJlZXQ='),(5,1,'VGhlIFdvbGYgb2YgV2FsbCBTdHJlZXQ='),(5,2,'T3V0IG9mIHRoZSBGdXJuYWNl'),(5,2,'UnVubmVyIFJ1bm5lcg=='),(5,1,'VGhlIEdyZWF0IEdhdHNieQ=='),(5,1,'RGphbmdvIFVuY2hhaW5lZA=='),(5,1,'VW50aXRsZWQgVmlraW5nIERyYW1h'),(5,1,'Si4gRWRnYXI='),(5,2,'VGhlIElkZXMgb2YgTWFyY2g='),(5,2,'UmVkIFJpZGluZyBIb29k'),(5,1,'SW5jZXB0aW9u'),(5,1,'SHViYmxlIDNE'),(5,1,'U2h1dHRlciBJc2xhbmQ='),(5,1,'RGFudGUgRmVycmV0dGk6IFNjZW5vZ3JhZm8gSXRhbGlhbm8='),(5,2,'T3JwaGFu'),(5,1,'UmV2b2x1dGlvbmFyeSBSb2Fk'),(5,1,'Qm9keSBvZiBMaWVz'),(5,1,'R3JlZW5zYnVyZw=='),(5,3,'VGhlIDExdGggSG91cg=='),(5,1,'VGhlIDExdGggSG91cg=='),(5,2,'VGhlIDExdGggSG91cg=='),(5,2,'VGhlIEdhcmRlbmVyIG9mIEVkZW4='),(5,1,'Qmxvb2QgRGlhbW9uZA=='),(5,1,'VGhlIERlcGFydGVk'),(5,2,'VGhlIEFzc2Fzc2luYXRpb24gb2YgUmljaGFyZCBOaXhvbg=='),(5,1,'VGhlIEF2aWF0b3I='),(5,2,'VGhlIEF2aWF0b3I='),(5,2,'VGhlIEF2aWF0b3I='),(5,1,'Q2F0Y2ggTWUgSWYgWW91IENhbg=='),(5,1,'R2FuZ3Mgb2YgTmV3IFlvcms='),(5,1,'RGF2aWQgQmxhaW5lOiBGZWFybGVzcw=='),(5,1,'RWwgQ2Fm6SBEb24ncw=='),(5,1,'VGhlIEJlYWNo'),(5,1,'UG9ydHJhaXQgb2YgTGVvbmFyZG86IFRoZSBLaWQgV2hvIFRvb2sgSG9sbHl3b29k'),(5,1,'TGVvbmFyZG8gRGlDYXByaW86IEluIEhpcyBPd24gV29yZHM='),(5,1,'Q2VsZWJyaXR5'),(5,1,'VGhlIE1hbiBpbiB0aGUgSXJvbiBNYXNr'),(5,1,'TGVvbmFyZG8gRGlDYXByaW86IFRoZSBJbnRlcnZpZXdzIEk='),(5,1,'TGVvbmFyZG8gRGlDYXByaW86IFRoZSBJbnRlcnZpZXdzIElJ'),(5,1,'TGVvbmFyZG8gRGlDYXByaW86IEluIEhpcyBPd24gV29yZHM='),(5,1,'VGl0YW5pYw=='),(5,1,'TWFydmluJ3MgUm9vbQ=='),(5,1,'Um9tZW8gKyBKdWxpZXQ='),(5,1,'VG90YWwgRWNsaXBzZQ=='),(5,1,'VGhlIEJhc2tldGJhbGwgRGlhcmllcw=='),(5,1,'VGhlIFF1aWNrIGFuZCB0aGUgRGVhZA=='),(5,1,'T25lIEh1bmRyZWQgYW5kIE9uZSBOaWdodHM='),(5,1,'V2hhdCdzIEVhdGluZyBHaWxiZXJ0IEdyYXBl'),(5,1,'VGhpcyBCb3kncyBMaWZl'),(5,1,'UG9pc29uIEl2eQ=='),(5,1,'Q3JpdHRlcnMgMw=='),(6,1,'Q3JlZWQgSUk='),(6,1,'U29ycnkgdG8gQm90aGVyIFlvdQ=='),(6,1,'RnVybG91Z2g='),(6,1,'QW5uaWhpbGF0aW9u'),(6,1,'RGlydHkgQ29tcHV0ZXI6IEFuIEVtb3Rpb24gUGljdHVyZSBieSBKYW5lbGxlIE1vbmFl'),(6,1,'TGl0dGxlIFdvb2Rz'),(6,1,'VGhvcjogUmFnbmFyb2s='),(6,1,'V2FyIG9uIEV2ZXJ5b25l'),(6,1,'Q3JlZWQ='),(6,1,'U2VsbWE='),(6,1,'RGVhciBXaGl0ZSBQZW9wbGU='),(6,1,'R3JhbnRoYW0gJiBSb3Nl'),(6,1,'QXV0b21vdGl2ZQ=='),(6,1,'TXVyZGVyIG9uIHRoZSAxM3RoIEZsb29y'),(6,1,'Rm9yIENvbG9yZWQgR2lybHM='),(6,1,'RXZlcnlkYXkgQmxhY2sgTWFu'),(6,1,'RXhxdWlzaXRlIENvcnBzZQ=='),(6,1,'TWlzc2lzc2lwcGkgRGFtbmVk'),(6,1,'UmVkICYgQmx1ZSBNYXJibGVz'),(6,1,'TWFrZSBJdCBIYXBwZW4='),(6,1,'VGhlIEluaXRpYXRpb24gb2YgU2FyYWg='),(6,1,'V2hlbiBhIFN0cmFuZ2VyIENhbGxz');
/*!40000 ALTER TABLE `rolesToCelebToMovie` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-20 13:49:30
