//
//  TestHomeViewController.swift
//  KNWInventory
//
//  Created by Kevin Leong on 6/12/21.
//

import UIKit

class TestHomeViewController: UIViewController {

    @IBOutlet weak var testLabel: UILabel!
    @IBOutlet weak var continueButton: UIButton!
    
    var password: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        if(self.password == "68782647"){
            self.testLabel.text = "Password Accepted!"
            continueButton.isHidden = false
        } else {
            self.testLabel.text = "Password Incorrect"
            continueButton.isHidden = true
        }
        

        // Do any additional setup after loading the view.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
