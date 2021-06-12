//
//  TestHomeViewController.swift
//  KNWInventory
//
//  Created by Kevin Leong on 6/12/21.
//

import UIKit

class TestHomeViewController: UIViewController {

    @IBOutlet weak var testLabel: UILabel!
    
    var password: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.testLabel.text = "You have entered \(self.password ?? "NO PASS") as your password."

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
