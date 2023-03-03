import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile

import internal.GlobalVariable as GlobalVariable

import com.kms.katalon.core.annotation.BeforeTestCase
import com.kms.katalon.core.annotation.BeforeTestSuite
import com.kms.katalon.core.annotation.AfterTestCase
import com.kms.katalon.core.annotation.AfterTestSuite
import com.kms.katalon.core.context.TestCaseContext
import com.kms.katalon.core.context.TestSuiteContext

class Hook {
	
	def startApp(){
		Mobile.startApplication('Apk/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk', false)
	}
	
	def endApp() {
		Mobile.closeApplication()	
	}
	
	@BeforeTestCase
	def beforeTestCase(TestCaseContext testCaseContext) {
		KeywordUtil.logInfo('Test Suite: ' + testCaseContext.getTestCaseId())
		this.startApp()
	}

	@AfterTestCase
	def afterTestCase(TestCaseContext testCaseContext) {
		KeywordUtil.logInfo('Test Suite: ' + testCaseContext.getTestCaseId())
		this.endApp()
	}
	
	@BeforeTestSuite
	def beforeTestSuite(TestSuiteContext testSuiteContext) {
		KeywordUtil.logInfo('Test Suite: ' + testSuiteContext.getTestSuiteId())
		this.startApp()	
	}

	@AfterTestSuite
	def afterTestSuite(TestSuiteContext testSuiteContext) {
		KeywordUtil.logInfo('Test Suite: ' + testSuiteContext.getTestSuiteId())
		this.endApp()
	}
}